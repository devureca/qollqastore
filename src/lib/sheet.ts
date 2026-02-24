import type { Product, Config, Slide, Review } from '../types'

const SHEET_ID = import.meta.env.SHEET_ID

function sheetUrl(sheetName: string) {
    return `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`
}

async function fetchSheet(sheetName: string): Promise<string[][]> {
    try {
        const res = await fetch(sheetUrl(sheetName))
        const text = await res.text()
        return parseCSV(text)
    } catch (err) {
        console.error(`Error leyendo pestaña ${sheetName}:`, err)
        return []
    }
}

function parseCSV(text: string): string[][] {
    const rows: string[][] = []
    const lines = text.split('\n')
    for (const line of lines) {
        if (!line.trim()) continue
        const cols: string[] = []
        let current = ''
        let inQuotes = false
        for (let i = 0; i < line.length; i++) {
            const char = line[i]
            if (char === '"') {
                inQuotes = !inQuotes
            } else if (char === ',' && !inQuotes) {
                cols.push(current.trim())
                current = ''
            } else {
                current += char
            }
        }
        cols.push(current.trim())
        rows.push(cols)
    }
    return rows
}

function rowsToObjects(rows: string[][]): Record<string, string>[] {
    if (rows.length < 2) return []
    const headers = rows[0].map(h => h.toLowerCase().trim())
    return rows.slice(1).map(row => {
        const obj: Record<string, string> = {}
        headers.forEach((header, i) => {
            obj[header] = row[i] ?? ''
        })
        return obj
    })
}

export async function getProducts(): Promise<Product[]> {
    const rows = await fetchSheet('productos')
    const objects = rowsToObjects(rows)
    return objects.filter(p => p.nombre) as Product[]
}

export async function getConfig(): Promise<Config> {
    const rows = await fetchSheet('config')
    const defaults: Config = {
        nombre: 'Mi Tienda',
        descripcion: 'Bienvenido a mi tienda',
        color_primario: '#6366f1',
        whatsapp: '',
        instagram: '',
        facebook: '',
        tiktok: '',
        moneda: '$',
    }
    if (rows.length < 2) return defaults
    // config tiene formato campo|valor en lugar de cabeceras
    const config: Config = { ...defaults }
    for (const row of rows.slice(1)) {
        if (row[0] && row[1]) {
            config[row[0].toLowerCase().trim()] = row[1].trim()
        }
    }
    return config
}

export async function getSlides(): Promise<Slide[]> {
    const rows = await fetchSheet('slider')
    return rowsToObjects(rows).filter(s => s.imagen) as unknown as Slide[]
}

export async function getReviews(): Promise<Review[]> {
    const rows = await fetchSheet('resenas')
    return rowsToObjects(rows).filter(r => r.nombre) as unknown as Review[]
}

export function getCategories(products: Product[]): string[] {
    const cats = products
        .map(p => p.categoria)
        .filter(Boolean)
    return ['Todos', ...Array.from(new Set(cats))]
}

export function getCustomFields(products: Product[]): string[] {
    const fixed = ['id', 'nombre', 'descripcion', 'imagen', 'precio', 'disponible', 'categoria']
    if (products.length === 0) return []
    return Object.keys(products[0]).filter(k => !fixed.includes(k) && products[0][k])
}
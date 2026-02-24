export interface Product {
    id: string
    nombre: string
    descripcion: string
    imagen: string
    precio: string
    disponible: string
    categoria: string
    [key: string]: string // cabeceras custom
}

export interface Config {
    nombre: string
    descripcion: string
    color_primario: string
    whatsapp: string
    instagram: string
    facebook: string
    tiktok: string
    moneda: string
    [key: string]: string
}

export interface Slide {
    imagen: string
    titulo: string
    subtitulo: string
}

export interface Review {
    nombre: string
    texto: string
    estrellas: string
}
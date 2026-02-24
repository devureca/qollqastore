/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SHEET_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
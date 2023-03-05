export function getBaseURL() {
    return `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_GOOGLE_SHEET_ID}/values`
}
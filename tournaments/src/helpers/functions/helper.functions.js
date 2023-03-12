/**
 * 
 * @returns the url for the spreadsheet
 */
export function getBaseURL() {
    return `https://sheets.googleapis.com/v4/spreadsheets/${import.meta.env.VITE_GOOGLE_SHEET_ID}/values`
}

/**
 * 
 * @param {string} date date in string format
 * @returns {number} number of days between today and the given date
 */
export function getDateDifference(date) {
    return Math.round((new Date(date) - new Date()) / (1000 * 60 * 60 * 24))
}

/**
 * 
 * @param {number} numberOfDays 
 * @returns relatively formatted date
 * 
 * `eg: 0 will return today`
 */
export function formatToRelativeDate(numberOfDays) {
    const rtf = new Intl.RelativeTimeFormat('en', {numeric: 'auto'})
    return rtf.format(numberOfDays, 'days')
}
// Month and day format: MM-DD
export const holidayTheme = {
    initDate: '11-03',
    endDate: '12-31'
}

export function isHolidayThemeActive(now = new Date()) {
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const currentDate = `${month}-${day}`

    return currentDate >= holidayTheme.initDate && currentDate <= holidayTheme.endDate
}

const DATE_UNITS: Record<string, number> = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
} as const

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export const getRelativeTime = (epochTime: number) => {
  const timeStart = new Date(epochTime * 1000).getTime()

  const timeEnd = new Date().getTime()

  const elapse = (timeStart - timeEnd) / 1000

  for (const unit in DATE_UNITS) {
    const absoluteElapsed = Math.abs(elapse)

    if (absoluteElapsed > DATE_UNITS[unit] || unit === 'SECOND') {
      return rtf.format(
        Math.round(elapse / DATE_UNITS[unit]),
        unit as Intl.RelativeTimeFormatUnit
      )
    }
  }

  return ''
}

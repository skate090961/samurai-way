export function formatTime(timeStr: Date) {
  const date = new Date(timeStr)
  const currentDate = new Date()

  const dayDiff = Math.floor(((currentDate as any) - (date as any)) / (1000 * 60 * 60 * 24))

  let formattedTime

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const amPm = hours >= 12 ? "pm" : "am"
  const formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours

  if (dayDiff === 0) {
    formattedTime = `Today at ${formattedHours}:${minutes.toString().padStart(2, "0")} ${amPm}`
  } else if (dayDiff === 1) {
    formattedTime = `Yesterday at ${formattedHours}:${minutes.toString().padStart(2, "0")} ${amPm}`
  } else if (dayDiff === 2) {
    formattedTime = date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  } else {
    const day = date.getDate()
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)
    formattedTime = `${day} ${month} at ${formattedHours}:${minutes.toString().padStart(2, "0")} ${amPm}`
  }

  return formattedTime
}

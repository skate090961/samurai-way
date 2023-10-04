export const getRefactorTime = () => {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
}

export const getRefactorDate = () => {
    const currentDate = new Date()

    const monthNames = [
        "янв", "фев", "мар", "апр", "мая", "июн",
        "июл", "авг", "сен", "окт", "ноя", "дек"
    ];

    const day = currentDate.getDate()
    const monthIndex = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const monthName = monthNames[monthIndex]

    return `${day} ${monthName} ${year}`
};

export const getRefactorDateAndTime = () => {
    const date = getRefactorDate()
    const time = getRefactorTime()
    return `${date} в ${time}`
};
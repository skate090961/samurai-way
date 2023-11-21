const shortenLink = (link: string) => {
    let shortLink = link.replace(/(^\w+:|^)\/\//, '')
    if (shortLink.length > 15) {
        shortLink = shortLink.substring(0, 15) + '...'
    }
    return shortLink
}

export default shortenLink
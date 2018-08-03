const getBoxesRequired = (items, largeBoxesAvailable, smallBoxesAvailable) => {
    if (items < 0) return -1

    let largeBoxesRequired = Math.floor(items / 5)

    if (largeBoxesRequired > largeBoxesAvailable)
        largeBoxesRequired = largeBoxesAvailable

    const smallBoxesRequired = items - largeBoxesRequired * 5

    if (smallBoxesRequired > smallBoxesAvailable) return -1

    return largeBoxesRequired + smallBoxesRequired
}

module.exports = getBoxesRequired

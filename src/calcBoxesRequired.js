const getBoxesRequired = (target, largeBoxesAvailable, smallBoxesAvailable) => {
    if (target < 0) return -1
    if (target === 0) return 0

    let largeBoxesRequired = Math.floor(target / 5)

    if (largeBoxesRequired > largeBoxesAvailable)
        largeBoxesRequired = largeBoxesAvailable

    const smallBoxesRequired = target - largeBoxesRequired * 5

    if (smallBoxesRequired > smallBoxesAvailable) return -1

    return largeBoxesRequired + smallBoxesRequired
}

module.exports = getBoxesRequired

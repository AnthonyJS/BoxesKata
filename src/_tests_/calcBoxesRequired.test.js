const getBoxesRequired = require('../calcBoxesRequired')

test.each([
    // Error states
    [-1, 1, 1, -1],
    // Zero state
    [0, 1, 1, 0],
    // Unlimited boxes
    [1, 100, 100, 1],
    [3, 100, 100, 3],
    [5, 100, 100, 1],
    [6, 100, 100, 2],
    [7, 100, 100, 3],
    [17, 100, 100, 5],
    [27, 100, 100, 7],
    // Not enough big boxes
    [7, 0, 100, 7],
    [7, 1, 100, 3],
    [12, 2, 100, 4],
    // Not enough small boxes
    [8, 100, 0, -1],
    [9, 100, 1, -1],
    // Right number of boxes
    [10, 2, 0, 2],
    [11, 2, 1, 3],
    [14, 2, 4, 6],
    [15, 3, 0, 3],
    [115, 23, 0, 23],
    [118, 23, 3, 26]
])(
    'items: %i largeBoxesAvailable: %i smallBoxesAvailable: %i boxesRequired: %i',
    (a, b, c, expected) => {
        const result = getBoxesRequired(a, b, c)
        expect(result).toBe(expected)
    }
)

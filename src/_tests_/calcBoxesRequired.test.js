const getBoxesRequired = require('../calcBoxesRequired')

test.each([
    // Error state
    [-1, 1, 1, -1],
    [-100, -1, -1, -1],
    // Zero state
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    // Surplus boxes
    [1, 100, 100, 1],
    [3, 100, 100, 3],
    [5, 100, 100, 1],
    [6, 100, 100, 2],
    [7, 100, 100, 3],
    [17, 100, 100, 5],
    [27, 100, 100, 7],
    // Only big boxes needed
    [5, 1, 0, 1],
    [10, 2, 0, 2],
    [100, 20, 0, 20],
    // Big boxes and small boxes needed
    [7, 1, 100, 3],
    [12, 2, 100, 4],
    // Not enough big boxes, but enough small boxes
    [7, 0, 100, 7],
    [17, 0, 100, 17],
    // Enough big boxes but not enough small boxes
    [8, 100, 0, -1],
    [9, 100, 1, -1],
    // Exactly right number of boxes
    [10, 2, 0, 2],
    [11, 2, 1, 3],
    [14, 2, 4, 6],
    [15, 3, 0, 3],
    [15, 0, 15, 15],
    [115, 23, 0, 23],
    [118, 23, 3, 26]
])(
    'items: %i largeBoxesAvailable: %i smallBoxesAvailable: %i boxesRequired: %i',
    (a, b, c, expected) => {
        const result = getBoxesRequired(a, b, c)
        expect(result).toBe(expected)
    }
)

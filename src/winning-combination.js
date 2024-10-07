export const WINNING_COMBINATIONS = [
    // horizontal
    [
        { rowIdx: 0, colIdx: 0 },
        { rowIdx: 0, colIdx: 1 },
        { rowIdx: 0, colIdx: 2 },
    ],
    [
        { rowIdx: 1, colIdx: 0 },
        { rowIdx: 1, colIdx: 1 },
        { rowIdx: 1, colIdx: 2 },
    ],
    [
        { rowIdx: 2, colIdx: 0 },
        { rowIdx: 2, colIdx: 1 },
        { rowIdx: 2, colIdx: 2 },
    ],
    // vertical
    [
        { rowIdx: 0, colIdx: 0 },
        { rowIdx: 1, colIdx: 0 },
        { rowIdx: 2, colIdx: 0 },
    ],
    [
        { rowIdx: 0, colIdx: 1 },
        { rowIdx: 1, colIdx: 1 },
        { rowIdx: 2, colIdx: 1 },
    ],
    [
        { rowIdx: 0, colIdx: 2 },
        { rowIdx: 1, colIdx: 2 },
        { rowIdx: 2, colIdx: 2 },
    ],
    // diagonal
    [
        { rowIdx: 0, colIdx: 0 },
        { rowIdx: 1, colIdx: 1 },
        { rowIdx: 2, colIdx: 2 },
    ],
    [
        { rowIdx: 0, colIdx: 2 },
        { rowIdx: 1, colIdx: 1 },
        { rowIdx: 2, colIdx: 0 },
    ],
];
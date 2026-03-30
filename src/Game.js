import { INVALID_MOVE } from 'boardgame.io/core';

export const TicTacToe = {
    setup: () => ({ cells: Array(9).fill(null) }),

    turn: {
        minMoves: 1,
        maxMoves: 1,
    },
    
    moves: {
        clickCell: ({ G, playerID }, id) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = playerID;
        },
    },

    endIf: ({ G, ctx }) => {
        if (IsVictory(G.cells)) {
            return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
            return { draw: true };
        };
    },
};

function IsVictory(cells) {
    const positions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < positions.length; i++) {
        let row = positions[i];
        let player = cells[row[0]];
        if (player === null) continue;
        else {
            let victory = true;
            for (let j = 0; j < 3; j++) {
                let curr = cells[row[j]];
                if (curr !== player || curr === null) {
                    victory = false;
                    break;
                };
            };
            if (victory === true) return true;
        };
    };
    
    return false;
};

function IsDraw(cells) {
    for (let i = 0; i < 9; i++) {
        if (cells[i] === null) return false;
    };
    return true;
};

import React from 'react';
import './Board.css'

export function TicTacToeBoard({ ctx, G, moves }) {
    const onClick = (id) => moves.clickCell(id);

    let winner = '';
    if (ctx.gameover) {
        if (ctx.gameover.winner !== undefined) {
            winner = <div id="winner">Winner: { ctx.gameover.winner }</div>
        }
        else {
            winner = <div id="winner">Draw!</div>
        };
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
        let cells = [];
        for (let j = 0; j < 3; j++) {
            const id = 3 * i + j;
            if (G.cells[id] !== null) {
                cells.push(
                    <td key={ id }>
                    <div class="cellStyle">{ G.cells[id] }</div>
                    </td>
                );
            }
            else {
                cells.push(
                    <td key={ id }>
                    <button class="cellStyle" onClick={ () => onClick(id) } />
                    </td>
                )
            };
        };
        tbody.push(<tr key={ i }>{ cells }</tr>);
    };

    return (
        <div>
            <h1 class="winnerStyle">{ winner }</h1> 
            <table id="board">
                <tbody>{ tbody }</tbody>
            </table>
        </div>
    );
};

import React from 'react';

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

    const cellStyle = {
        border: '1px solid #555',
        width: '100px',
        height: '100px',
        lineHeight: '100px',
        textAlign: 'center',
    };

    const centeredStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
        let cells = [];
        for (let j = 0; j < 3; j++) {
            const id = 3 * i + j;
            if (G.cells[id] !== null) {
                cells.push(
                    <td key={ id }>
                    <div style={ cellStyle }>{ G.cells[id] }</div>
                    </td>
                );
            }
            else {
                cells.push(
                    <td key={ id }>
                    <button style={ cellStyle } onClick={ () => onClick(id) } />
                    </td>
                )
            };
        };
        tbody.push(<tr key={ i }>{ cells }</tr>);
    };

    return (
        <div>
            { winner } 
            <table id="board" style={ centeredStyle }>
                <tbody>{ tbody }</tbody>
            </table>
        </div>
    );
};

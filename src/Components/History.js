import React from 'react';

const History = ({history,currentMove,moveTo}) => {
    return (
        <ul>
            {
                history.map((_,move) => {
                    return (
                        <li key={move}>
                            <button type='button' style={
                                {
                                    fontWeight:move === currentMove ? 'bold' : 'normal'
                                }
                            }
                            onClick={() => {
                                moveTo(move);
                            }}
                            >
                                { move === 0 ? 'Go to start' : `Go to move #${move}`}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default History;
import React, { useState } from 'react';
import Tr from './Tr';
import '../css/Table.css';

//2차원 테이블
const tttTable = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
//승자발생 조건
const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

const Table = () => {
  //승자
  const [win, setWin] = useState('');
  //최상위 부모에서 turn 관리
  const [turn, setTurn] = useState('O');
  //승패여부 검사
  const checkWinner = () => {
    for(let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      const tableFlattening = tttTable.flat();
      if(tableFlattening[a] 
        && tableFlattening[a] === tableFlattening[b]
        && tableFlattening[a] === tableFlattening[c]
        ) {
          return tableFlattening[a];
        } 
    }
    return null;
  }
  const turnChange = () => {
    //턴 바꾸기 전에 클릭 후 승패여부 검사
    const winner = checkWinner();
    if(winner) {
      setWin(winner);
      return;
    }

    if(turn === 'O') return setTurn('X');
    if(turn === 'X') return setTurn('O');
  }
  //최상위 부모에서 데이터 관리
  //-> 중복클릭 금지
  const positionData = (rowIndex, dataIndex) => {
    if(tttTable[rowIndex][dataIndex]) return;
    tttTable[rowIndex][dataIndex] = turn;
  }

  return (
    <table className='ttt-table'>
      <thead>
        <tr>
          <td rowSpan={2}>
            <h1>
              승자 : {win}
            </h1>
          </td>
        </tr>
      </thead>
      <tbody className='ttt-tbody'>
        {tttTable.map((row, rowIndex) => {
          return (
            <Tr key={rowIndex} rowArr={row} 
            rowIndex={rowIndex} positionData={positionData}
            turnChange={turnChange} />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
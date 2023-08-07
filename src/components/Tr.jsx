import React from 'react';
import Td from './Td';

const Tr = ({rowArr, rowIndex, positionData, turnChange}) => {
  return (
    <tr>
      {rowArr.map((data, dataIndex) => {
        return (
          <Td key={rowIndex * 3 + dataIndex} rowIndex={rowIndex} 
          data={data} dataIndex={dataIndex} positionData={positionData}
          turnChange={turnChange}/>
        );
      })}
    </tr>
  );
}

export default Tr;
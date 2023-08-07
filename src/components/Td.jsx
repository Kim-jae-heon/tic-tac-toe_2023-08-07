import React from 'react';

const Td = ({rowIndex, data, dataIndex, positionData, turnChange}) => {
  const checkHandler = () => {
    positionData(rowIndex, dataIndex);
    turnChange();
  }

  return (
    <td onClick={checkHandler}>
      {data}
    </td>
  );
}

export default Td;
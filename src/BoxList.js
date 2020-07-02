import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from "uuid/v4";


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function removeBox(id) { //refactor
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  const renderBoxes = () => {
    return (
      <div>
        {boxes.map(box => (
          <Box 
            key={box.id}
            handleRemove={() => removeBox(box.id)}
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
          />
        ))}
      </div>
    );
  };

  const buildBox = box => {
    console.log(box);
    let newBox = { ...box, id:uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  };

  return (
    <div className="BoxList">
      <NewBoxForm buildBox={buildBox} />
      {renderBoxes()}
    </div>
  );
};

export default BoxList;
import React from 'react';

function Box({id, handleRemove, backgroundColor="green", width=10, height=10}) {

  return (
    <div>
      <div style={{
          backgroundColor: backgroundColor,
          width: `${width}em`,
          height: `${height}em`
      }}>
      </div>
      <button onClick={() => handleRemove(id)}>X</button>
    </div>
  );
}

export default Box;
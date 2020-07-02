import React from 'react';

function Box(props) {

  return (
    <div>
      <div style={{
          backgroundColor: props.box.backgroundColor,
          width: `${props.box.width}em`,
          height: `${props.box.height}em`
      }}>
      </div>
      <button onClick={props.box.handleRemove}>X</button>
    </div>
  );
}

export default Box;

Box.defaultProps = {
  box : {
    backgroundColor: "green",
    width : 10,
    height : 10
  }
}
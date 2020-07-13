import React from 'react'
const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
          onClick={(evt) => {
            props.deleteItem(props.optionText);
          }}
        >
          remove
        </button>
      </div>
    );
  };
  export default Option;
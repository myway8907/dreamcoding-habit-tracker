import React, { useRef } from "react";

function AddHabit({ onAdd }) {
  const inputRef = useRef();
  const formRef = useRef();

  const func = (event) => {
    event.preventDefault();
    inputRef.current.value && onAdd(inputRef.current.value);

    formRef.current.reset();
  };

  return (
    <div className='input-container'>
      <form ref={formRef} className='add-form' onSubmit={func}>
        <input ref={inputRef} id='add-habit' type='text' size='50' />
        <button className='add-button'>Add</button>
      </form>
    </div>
  );
}

export default React.memo(AddHabit);

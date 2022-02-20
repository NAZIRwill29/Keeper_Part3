import React, { useState } from "react";

function CreateArea(props) {
  //data note input temp
  const [noteInputTemp, setNoteInputTemp] = useState({
    title: "",
    content: ""
  });

  //add input in data note input temp
  function storeInputTemp(event) {
    const { name, value } = event.target;
    setNoteInputTemp((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  //when btn clicked
  function submit(event) {
    //call func add
    props.addText(noteInputTemp);
    //clear data input temp
    setNoteInputTemp({
      title: "",
      content: ""
    });
    //prevent form from refresh
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={storeInputTemp}
          name="title"
          placeholder="Title"
          value={noteInputTemp.title}
        />
        <textarea
          onChange={storeInputTemp}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteInputTemp.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

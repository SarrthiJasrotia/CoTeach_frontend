import React, { useRef, useState } from 'react';

function Notes() {

    const [newNote, setNewNote] = useState({
     note: "",
    })

    const URL = "https://coteach-production.herokuapp.com/notes/"

        // This function is used to get the data from the database. It will wait until it is completed and the set the state of the content with the returned data
        const getNotes = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setNewNote(data);
        }

     // User can create a new note
     const createNote = async (note) => {
        await fetch(URL, {
            method: "Post",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(note)
        })
        getNotes();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createNote(newNote);
        setNewNote({
          note: "",
        });
    };

    // handleChange function for form
    const handleChange = (event) => {
        setNewNote({ ...newNote, [event.target.name]: event.target.value });
    };



  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log("New Notes:", editorRef.current.getContent());
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className='textEditor'><textarea
        type="text"
      
        name="notes"
        placeholder="Enter your notes here."
        onChange={handleChange} 
        style={{height:'500px', width:'800px', fontSize:'30px'}}>
                

 
        </textarea>
       
      <input type="submit" value='Create Note' />
      </div>
      </form>
    </>
  );
}

export default Notes;
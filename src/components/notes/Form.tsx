import React, { useState, useRef, useContext } from 'react';

import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from 'uuid';
import { DataContext, NoteType } from '../context/DataContext';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 600px;
  border-radius: 8px;
  min-height: 30px;
  padding: 10px 15px;
`;

const note = {
  heading: '',
  text: '',
};

const Form: React.FC = () => {
  const [showTextField, setShowTextField] = useState(false);

  const [addNote, setAddNote] = useState<NoteType>({ ...note, id: uuid() });

  const { setNotes } = useContext(DataContext);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickAway = () => {
    setShowTextField(false);
    if (containerRef.current) {
      containerRef.current.style.minHeight = '30px';
    }
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
    // console.log(notes);
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    if (containerRef.current) {
      containerRef.current.style.minHeight = '70px';
    }
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder='Title'
            variant='standard'
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={(e) => onTextChange(e)}
            name='heading'
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder='Take a note...'
          multiline
          maxRows={Infinity}
          variant='standard'
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={(e) => onTextChange(e)}
          name='text'
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;

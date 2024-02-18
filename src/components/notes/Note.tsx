import React, { useContext } from 'react';
import { DataContext, NoteType } from '../context/DataContext';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
interface NoteProps {
  note: NoteType;
}
const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const Note: React.FC<NoteProps> = ({ note }) => {
  const { notes, setNotes, setArchiveNote, setDeleteNote } = useContext(DataContext);
  const archiveNote = (note: NoteType) => {
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNote);
    setArchiveNote((prevState) => [note, ...prevState]);
  };
  const deleteNote = (note: NoteType) => {
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNote);
    setDeleteNote((prevState) => [note, ...prevState]);
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive fontSize='small' style={{ marginLeft: 'auto' }} onClick={() => archiveNote(note)} />
        <Delete fontSize='small' onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;

import React, { useContext } from 'react';
import { DataContext, NoteType } from '../context/DataContext';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';

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
const DeleteNote: React.FC<NoteProps> = ({ note }) => {
  const { notes, setNotes, setArchiveNote, setDeleteNote, deleteNote } = useContext(DataContext);

  const restoreNote = (note: NoteType) => {
    const updatedNote = deleteNote.filter((data) => data.id !== note.id);
    setDeleteNote(updatedNote);
    setNotes((prevState) => [note, ...prevState]);
  };
  const deleteNoteFunction = (note: NoteType) => {
    const updatedNote = notes.filter((data) => data.id !== note.id);
    setDeleteNote(updatedNote);
  };
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Restore fontSize='small' style={{ marginLeft: 'auto', cursor: 'pointer' }} onClick={() => restoreNote(note)} />
        <Delete fontSize='small' style={{ cursor: 'pointer' }} onClick={() => deleteNoteFunction(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;

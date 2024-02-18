import React, { useContext } from 'react';
import { DataContext, NoteType } from '../context/DataContext';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

interface NoteProps {
  archive: NoteType;
}
const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const Archive: React.FC<NoteProps> = ({ archive }) => {
  const { notes, setNotes, archiveNote, setArchiveNote, setDeleteNote, deleteNote } = useContext(DataContext);

  const unArchiveNote = (archive: NoteType) => {
    const updatedNote = archiveNote.filter((data) => data.id !== archive.id);
    setArchiveNote(updatedNote);
    setNotes((prevState) => [archive, ...prevState]);
  };
  const deleteNoteFunc = (archive: NoteType) => {
    const updatedNote = archiveNote.filter((data) => data.id !== archive.id);
    setDeleteNote(updatedNote);
    setNotes((prevState) => [archive, ...prevState]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{archive.heading}</Typography>
        <Typography>{archive.text}</Typography>
      </CardContent>
      <CardActions>
        <Unarchive
          fontSize='small'
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => unArchiveNote(archive)}
        />
        <Delete fontSize='small' onClick={() => deleteNoteFunc(archive)} />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;

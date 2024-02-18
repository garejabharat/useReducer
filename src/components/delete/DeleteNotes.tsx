import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../context/DataContext';
import DeleteNote from './DeleteNote';

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DeleteNotes: React.FC = () => {
  const { deleteNote } = useContext(DataContext);
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Grid container style={{ marginTop: 16 }}>
          {deleteNote.map((deleteNote) => (
            <Grid item key={deleteNote.id}>
              <DeleteNote note={deleteNote} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeleteNotes;

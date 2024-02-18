import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../context/DataContext';

import Archive from './Archive';

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Archives: React.FC = () => {
  const { archiveNote } = useContext(DataContext);
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Grid container style={{ marginTop: 16 }}>
          {archiveNote.map((archive) => (
            <Grid item key={archive.id}>
              <Archive archive={archive} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Archives;

import React from 'react';
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Archives from './archive/Archives';
import DeleteNotes from './delete/DeleteNotes';

const Home: React.FC = () => {
  return (
    <>
      <Box style={{ display: 'flex', width: '100%' }}>
        <SwipeDrawer />
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/archive' element={<Archives />} />
          <Route path='/delete' element={<DeleteNotes />} />
        </Routes>
      </Box>
    </>
  );
};

export default Home;

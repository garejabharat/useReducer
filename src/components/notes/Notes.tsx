import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Form from './Form';
import Note from './Note';
import { DataContext, NoteType } from '../context/DataContext';
import EmptyNote from './EmptyNote';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
  DraggableProvided,
  DroppableProvided,
} from 'react-beautiful-dnd';
const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Notes: React.FC = () => {
  const { notes, setNotes } = useContext(DataContext);

  const onDragEnd = (result: DropResult) => {
    // if (result.combine) {
    //   // super simple: just removing the dragging item
    //   const items: NoteType[] = notes;
    //   items.splice(result.source.index, 1);
    //   setNotes(items);
    //   return;
    // }
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(notes, result.source.index, result.destination.index);

    setNotes(items);
  };
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='list'>
              {(provided: DroppableProvided) => (
                <Grid ref={provided.innerRef} {...provided.droppableProps} container style={{ marginTop: 16 }}>
                  {notes.map((note, index) => (
                    <Draggable draggableId={note.id} index={index} key={note.id}>
                      {(provided: DraggableProvided) => (
                        <Grid item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Note note={note} />
                        </Grid>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Grid>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <EmptyNote />
        )}
      </Box>
    </Box>
  );
};

export default Notes;

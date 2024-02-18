import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export interface NoteType {
  id: string;
  heading?: string;
  text?: string;
}

interface ContextProps {
  notes: NoteType[];
  archiveNote: NoteType[];
  deleteNote: NoteType[];
  setNotes: Dispatch<SetStateAction<NoteType[]>>;
  setArchiveNote: Dispatch<SetStateAction<NoteType[]>>;
  setDeleteNote: Dispatch<SetStateAction<NoteType[]>>;
}

export const DataContext = createContext<ContextProps>({
  notes: [],
  archiveNote: [],
  deleteNote: [],
  setNotes: () => {},
  setArchiveNote: () => {},
  setDeleteNote: () => {},
});

interface DataProviderProps {
  children: JSX.Element;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [archiveNote, setArchiveNote] = useState<NoteType[]>([]);
  const [deleteNote, setDeleteNote] = useState<NoteType[]>([]);

  const value: ContextProps = {
    notes,
    archiveNote,
    deleteNote,
    setNotes,
    setArchiveNote,
    setDeleteNote,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;

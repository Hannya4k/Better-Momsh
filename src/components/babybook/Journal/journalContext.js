
import React, { createContext, useContext, useState } from 'react';

const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (title, date, note) => {
    const newEntry = {
      title,
      date,
      note,
    };
    setEntries([...entries, newEntry]);
  };

  return (
    <JournalContext.Provider value={{ entries, addEntry }}>
      {children}
    </JournalContext.Provider>
  );
};

export const useJournal = () => {
  return useContext(JournalContext);
};

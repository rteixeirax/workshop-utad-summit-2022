import { createContext, useContext, useState } from 'react';

/**
 * Init our context with an empty array as initial value.
 */
const StudentsContext = createContext([]);

export const StudentsContextProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: '59284', name: 'Manuel', email: 'al59284@utad.eu' },
    { id: '59285', name: 'Maria', email: 'al59285@utad.eu' },
    { id: '59286', name: 'Jose', email: 'al59286@utad.eu' },
  ]);

  /**
   * Notice that we set the value as an array, but we can set it as an object if we want.
   * The only thing that change is the way we access the value when we use our hook.
   *
   * Usage with a value as an array:
   *  const [students, setStudents] = useStudentContext();
   *
   * Usage with a value as an object:
   *  const {students, setStudents} = useStudentContext();
   */
  return (
    <StudentsContext.Provider value={[students, setStudents]}>
      {children}
    </StudentsContext.Provider>
  );
}

/**
 * Our hook to access and manipulate the Students context data.
 */
export const useStudentContext = () => useContext(StudentsContext);
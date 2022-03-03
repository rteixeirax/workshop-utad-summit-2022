import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import StudentsTable from '../../components/StudentsTable';

import { useStudentContext } from '../../context/StudentsContextProvider';
import MainLayout from '../../components/MainLayout';

const StudentsList = () => {
  const [students, setStudents] = useStudentContext();

  const handleOnDelete = (id) => {
    setStudents((prevStudents) => {
      /**
       * You can avoid the variable "newStudents", since the filter returns an array,
       * you can simply do this:
       *
       * return prevStudents.filter((student) => student.id !== id);
       */
      const newStudents = prevStudents.filter((student) => student.id !== id);
      return newStudents;
    });
  };

  return (
    <MainLayout>
      <Container>
        <h1>Students</h1>

        <StudentsTable
          students={students}
          onDelete={handleOnDelete}
        />
      </Container>
    </MainLayout>
  )
}

export default StudentsList;

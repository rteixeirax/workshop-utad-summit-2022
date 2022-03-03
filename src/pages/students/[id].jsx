import { useRouter } from 'next/router'

import MainLayout from '../../components/MainLayout';
import Container from '../../components/Container';
import NavigationButton from '../../components/NavigationButton';
import StudentForm from '../../components/StudentForm';

import { useStudentContext } from '../../context/StudentsContextProvider';

const StudentUpdate = () => {
  const router = useRouter();
  const [students, setStudents] = useStudentContext();

  /**
   * Get the id from the URL
   */
  const id = router.query.id;


  /**
   * Get the student data from the students array.
   */
  const selectedStudent = students.find((student) => student.id === id);

  const handleOnSubmitForm = (values) => {
    setStudents((prevStudents) => {
      /**
       * The array method findIndex, returns the index of the element in the array.
       */
      const idx = prevStudents.findIndex((student) => student.id === id);
      const newStudents = [...prevStudents];

      newStudents[idx] = values;

      return newStudents;
    });

    /**
     * After submit, we redirect the user to the students list page.
     */
    router.push('/students');
  };

  if (!selectedStudent) {
    return <p>Loading...</p>
  }

  return (
    <MainLayout>
      <Container>
        <h1>Edit Student | {selectedStudent.name}</h1>

        <NavigationButton
          label="Back"
          navigateTo="/students"
        />

        <StudentForm
          onSubmitForm={handleOnSubmitForm}
          initialValues={{
            id,
            name: selectedStudent.name,
            email: selectedStudent.email,
          }}
        />
      </Container>
    </MainLayout>
  );
};

export default StudentUpdate;

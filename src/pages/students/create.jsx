import { useRouter } from 'next/router';

import MainLayout from '../../components/MainLayout';
import Container from '../../components/Container';
import NavigationButton from '../../components/NavigationButton';
import StudentForm from '../../components/StudentForm';

import { useStudentContext } from '../../context/StudentsContextProvider';

const StudentCreate = () => {
  const router = useRouter();
  /**
   * Notice that the students variable is not in use, but for us to access the setStudents method,
   * that is the second element of the array, we need to declare it.
   * In order to avoid that we can do the following:
   *
   * const [, setStudents] = useStudentContext();
   *
   * Since we only care about the second element, we use the comma (,) to skip the first element.
   */
  const [students, setStudents] = useStudentContext();

  const handleOnSubmitForm = (values) => {
    setStudents((prevStudents) => {
      /**
       * To avoid using the array push method, we can use the javaScript spread operator (...).
       *
       * const newStudents = [...prevStudents, values];
       * return newStudents;
       *
       * The "...prevStudents" is setting the new array with all the elements
       * inside the prevStudents array and then, we add the new object (values) to the array.
       */
      const newStudents = [...prevStudents];
      newStudents.push(values);
      return newStudents;
    });

    /**
     * After submit, we redirect the user to the students list page.
     */
    router.push('/students');
  };

  return (
    <MainLayout>
      <Container>
        <h1>Create new Student</h1>

        <NavigationButton
          label="Back"
          navigateTo="/students"
        />

        <StudentForm
          onSubmitForm={handleOnSubmitForm}
          initialValues={{
            id: '',
            name: '',
            email: '',
          }}
        />
      </Container>
    </MainLayout>
  );
};

export default StudentCreate;
import Link from 'next/link';

import styles from '../styles/Students.module.css';

const StudentsTable = ({ students, onDelete }) => {
  /**
   * This method needs to be a "double" call function because when it's passed to
   * the onClick event, we need to pass in the student id, and for that we need to "call" in the first function.
   * But, when we passed the id it's not our goal to execute the deletion, that we want to
   * do when the user clicks on the button. Only then the second function is called.
   *
   * If we use this method outside the onClick event we need to double call it like this:
   *  onDeleteClick(id)();
   */
  const onDeleteClick = (id) => () => {
    onDelete(id);
  };

  return (
    <table className={styles.studentsTable}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>
              <button
                className={styles.deleteBtn}
                onClick={onDeleteClick(student.id)}
              >
                Delete
              </button>
              {' | '}
              <Link href={`/students/${student.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={4}>
            <Link href="/students/create">Add new student</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StudentsTable;
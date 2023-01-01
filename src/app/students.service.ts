import { Student } from "./student";

export class StudentService{
  students: Student[] = [
    {name: 'Mark', course: 'MBA', marks: 520, dob: new Date('11-12-1997'), gender: 'Male'},
    {name: 'Steve', course: 'BTech', marks: 420, dob: new Date('11-11-1998'), gender: 'Male'},
    {name: 'Merry', course: 'MBA', marks: 350, dob: new Date('11-10-1995'), gender: 'Female'},
    {name: 'John', course: 'BTech', marks: 460, dob: new Date('11-11-1997'), gender: 'Male'},
    {name: 'Sara', course: 'MSc', marks: 500, dob: new Date('11-10-1994'), gender: 'Female'},
    {name: 'Seema', course: 'MSc', marks: 510, dob: new Date('11-12-1995'), gender: 'Female'}
  ];
  totalMarks: number = 600;
}
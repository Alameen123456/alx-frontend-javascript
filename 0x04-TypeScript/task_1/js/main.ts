interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  console.log(printTeacher("John", "Doe"));
  
  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  class StudentClass {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const student = new StudentClass('Jane', 'Doe');
  console.log(student.workOnHomework());
  console.log(student.displayName());
  
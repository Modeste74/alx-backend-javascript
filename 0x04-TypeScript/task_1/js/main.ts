// task 1
interface TeacherBase {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
}

type AdditionalAttributes = {
  [key: string]: any;
};

// task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

// task 1.
class Teacher implements TeacherBase {
  firstName: string;
  lastName: string;
  
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  additionAttribute: AdditionAttributes = {};
  constructor(firstName: string, lastName: string, teacherData: TeacherBase & AdditionalAttributes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = teacherData.fullTimeEmployee;
    this.yearsOfExperience = teacherData.yearsOfExperience;
    this.location = teacherData.location;
    for (const key in teacherData) {
      if (key !== 'fullTimeEmployee' && key !== 'yearsOfExperience' && key !== 'location') {
        this.additionalAttributes[key] = teacherData[key];
      }
    }
  }
}

// task 3.
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface ClassStudent {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements ClassStudent {
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

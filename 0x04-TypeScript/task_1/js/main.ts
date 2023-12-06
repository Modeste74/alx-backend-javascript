interface TeacherBase {
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
}

type AdditionalAttributes = {
  [key: string]: any;
};

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

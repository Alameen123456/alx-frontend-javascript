namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
    }
  }

  namespace Subjects {
    export class Subject {
      teacher: Teacher;
  
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }
  
  /// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingC?: number;
    }
  
    export class Cpp extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
      }
  
      getAvailableTeacher(): string {
        return this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0
          ? `Available Teacher: ${this.teacher.firstName}`
          : 'No available teacher';
      }
    }
  }

  /// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    export class React extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for React';
      }
  
      getAvailableTeacher(): string {
        return this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0
          ? `Available Teacher: ${this.teacher.firstName}`
          : 'No available teacher';
      }
    }
  }
  
 
  /// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher(): string {
        return this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0
          ? `Available Teacher: ${this.teacher.firstName}`
          : 'No available teacher';
      }
    }
  }
  
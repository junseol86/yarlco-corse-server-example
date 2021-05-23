import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassService {
  getClasses(): string[] {
    return [
        'Software Engineering',
        'Web Programming',
        'Data Structure',
        'Operating System',
        'Algorithm'
    ];
  }
}

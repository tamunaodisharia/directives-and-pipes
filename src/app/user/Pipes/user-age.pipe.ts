import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Model/user.model';
@Pipe({
  name: 'userAge',
})
export class UserAgePipe implements PipeTransform {
  transform(user: User): number {
    var today = new Date();
    var birthDate = user.birthDate;
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

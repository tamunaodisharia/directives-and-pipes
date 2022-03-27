import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/Model/user.model';
@Pipe({
  name: 'userNames',
})
export class UserNamesPipe implements PipeTransform {
  transform(users: User[] | undefined): string {
    return users!.reduce((acc, curr) => acc + curr.firstName + ', ', '');
  }
}

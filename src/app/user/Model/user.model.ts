export interface User {
  firstName: string;
  lastName: string;
  about: string;
  birthDate: Date;
  status: Status;
}
export enum Status {
  active = 'active',
  inactive = 'inactive',
  deleted = 'deleted',
}

import { ObjectID } from 'typeorm';

export interface UserInterface {
  _id?: ObjectID;
  firstName?: string;
  lastName?: string;
  isActive?: string;
}

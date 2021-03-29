import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('User')
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}

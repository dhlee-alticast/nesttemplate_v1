import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('ExData')
export class ExData {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  parkingId: string;

  @Column()
  soId: string;

  @Column({ default: true })
  isActive: boolean;
}

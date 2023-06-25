import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Insert', this);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Update', this);
  }

  @AfterRemove()
  logRemove() {
    console.log('Delete', this);
  }
}

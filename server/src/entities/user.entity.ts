import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'user_id', type: 'bigint' })
  id: number;

  @Column({ name: 'user_name', nullable: false })
  username: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'email', nullable: false })
  email: string;
}

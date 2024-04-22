import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'report' })
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: Date;
}

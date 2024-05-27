import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usd_tool' })
export class UsdTool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  number: number;

  @Column()
  atachedAt: string;
}

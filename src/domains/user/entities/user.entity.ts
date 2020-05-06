import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne, BeforeInsert,
} from 'typeorm'

import { RoleUserEntity } from './role-user.entity'
import { Exclude } from 'class-transformer'

@Entity({
 name: 'acl_usuario'
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ name: 'nome'})
  public name: string

  @Column()
  public email: string

  @Column({ name: 'foto'})
  public photo: string

  @Column()
  public password: string

  @Exclude()
  @Column({ name: 'remember_token'})
  public rememberToken: string

  @CreateDateColumn({name: 'created_at', type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
  public createdAt: Date

  @UpdateDateColumn({name: 'updated_at', type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"})
  public updatedAt: Date

  @OneToOne(type => RoleUserEntity, roleUser => roleUser.user)
  roleUser?: RoleUserEntity;
}

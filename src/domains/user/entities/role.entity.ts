import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleUserEntity } from './role-user.entity'

@Entity({
 name: 'acl_funcao'
})
export class RoleEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({name: 'slug'})
  slug: string

  @Column({name: 'nome'})
  name: string

  @Column('simple-json', {name: 'permissoes'})
  permissions: {}


  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt: Date

  @OneToOne(type => RoleUserEntity, roleUser => roleUser.role)
  @JoinColumn({ name: 'id'})
  roleUser: RoleUserEntity;
}

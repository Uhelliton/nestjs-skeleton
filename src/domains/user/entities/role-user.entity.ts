import { Entity, OneToOne, JoinColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { RoleEntity } from './role.entity'
import { UserEntity } from './user.entity';

@Entity({
 name: 'acl_funcao_usuario'
})
export class RoleUserEntity {

 @PrimaryColumn({ name: 'usuario_id', select: false })
 public userId: number

  @PrimaryColumn({ name: 'funcao_id', select: false })
  public roleId: number

 @CreateDateColumn({name: 'created_at', type: 'timestamp'})
 createdAt: Date

 @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
 updatedAt: Date

 @OneToOne(type => RoleEntity, role => role.roleUser, {eager: true, lazy: false})
 @JoinColumn({ name: 'funcao_id', referencedColumnName: 'id'})
 public role?: RoleEntity

 @OneToOne(type => UserEntity, user => user.roleUser, {eager: false})
 @JoinColumn({ name: 'usuario_id' })
 public user?: UserEntity
}

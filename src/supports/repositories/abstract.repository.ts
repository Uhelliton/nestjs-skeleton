import { EntityRepository, Repository } from "typeorm";
import { RepositoryInterface } from './contracts/repository.interface';

@EntityRepository()
export class AbstractRepository<T> implements RepositoryInterface<T> {
  constructor(
    protected readonly repository: Repository<T>
  ) {}

  public all(): Promise<T[]> {
    return this.repository.find({ relations: ['roleUser'] })
  }

  /**
   *
   * @param id
   */
  public find(id: number): Promise<T> {
    return this.repository.findOne(id, { relations: ['roleUser'] })
  }

  async findWhere(options?: object): Promise<T> {
    const user = await this.repository.findOne(options)
    return user
  }

  /**
   *
   * @param dto
   */
  public insert(dto: object): Promise<T> {
    return this.repository.save(dto)
  }


  /**
   *
   * @param id
   * @param dto
   */
  public update(id: number, dto: object) {
    return this.repository.update(id, dto)
  }

}

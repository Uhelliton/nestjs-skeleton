export interface RepositoryInterface<T> {
  /**
   * Método que retorna a listagem de todos os dados de uma tabela
   */
  all(): Promise<T[]>

  /**
   * Método que retorna uma coluna especifica da tabela da tabela
   * @param id
   */
  find(id: number): Promise<T>

  /**
   * Método que retorna uma coluna especifica da tabela da tabela
   * @param dto
   */
  insert(dto: object): Promise<T>
}

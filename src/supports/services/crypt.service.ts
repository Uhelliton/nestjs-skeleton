import * as bcrypt from 'bcrypt'

export class CryptService {
  private static instance: CryptService


  public static getInstance(): CryptService {
    if (!CryptService.instance) {
      CryptService.instance = new CryptService();
    }

    return CryptService.instance
  }


   public static async comparePassword(attemptPassword: string, userPassword): Promise<boolean> {
    return await bcrypt.compare(attemptPassword, userPassword)
  }
}

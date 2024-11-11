import User from "../entities/user.entity.";
import { AppDataSource } from "../server";

class UserService {
  private userRepository = AppDataSource.getRepository(User);
  async create(name: string, email: string, password: string) {
    const newUser = new User(name, email, password);
    //const createUser = this.userRepository.create(newUser);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async findAll() {
    return this.userRepository.find();
  }
}

export default new UserService();

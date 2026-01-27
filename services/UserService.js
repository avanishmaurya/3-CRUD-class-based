class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(data) {
        return await this.userRepository.create(data);
    }

    async getAllUsers() {
        return await this.userRepository.findAll();
    }

    async getUserById(id) {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }

    async updateUser(id, data) {
        const updatedUser = await this.userRepository.update(id, data);

        if (!updatedUser) {
            throw new Error('User not found');
        }

        return updatedUser;
    }

    async deleteUser(id) {
        const deletedUser = await this.userRepository.delete(id);

        if (!deletedUser) {
            throw new Error('User not found');
        }

        return deletedUser;
    }
}

module.exports = UserService;

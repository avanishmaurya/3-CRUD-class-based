class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    createUser(data) {
        return this.userRepository.create(data);
    }

    getAllUsers() {
        return this.userRepository.findAll();
    }

    getUserById(id) {
        const user = this.userRepository.findById(id);
        console.log("a user ", user)
    }

    updateUser(id, data) {
        return this.userRepository.update(id, data);
    }

    deleteUser(id) {
        return this.userRepository.delete(id);
    }
}

module.exports = UserService;

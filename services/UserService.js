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
        return this.userRepository.findById(id);
    }

    updateUser(id, data) {
        return this.userRepository.update(id, data);
    }

    deleteUser(id) {
        return this.userRepository.delete(id);
    }
}

module.exports = UserService;

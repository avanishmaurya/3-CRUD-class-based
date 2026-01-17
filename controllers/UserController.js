class UserController {
    constructor(userService) {
        this.userService = userService;
        this.createUser = this.createUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    async createUser(req, res) {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await this.userService.updateUser(req.params.id, req.body);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await this.userService.deleteUser(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json({ message: 'User deleted' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = UserController;

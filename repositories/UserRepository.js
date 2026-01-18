class UserRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async findAll() {
        const users = await this.model.findAll();
        // console.log('Fetched all users:', users);
        // console.log("users*****",users[0].name )
        // console.log("user datavalues****",users[1].name, users[1].email)

        return users;
    }

    async findById(id) {
        return await this.model.findByPk(id);
    }

    async update(id, data) {
        const record = await this.model.findByPk(id);
        if (!record) return null;
        record.name = "avanish4"
        return await record.save();
    }

    async delete(id) {
        const record = await this.model.findByPk(id);
        if (!record) return null;
        return await record.destroy();
    }
}

module.exports = UserRepository;

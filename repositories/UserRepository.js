class UserRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async findAll() {
        return await this.model.findAll();
    }

    async findById(id) {
        return await this.model.findByPk(id);
    }

    async update(id, data) {
        const record = await this.model.findByPk(id);
        if (!record) return null;
        return await record.update(data);
    }

    async delete(id) {
        const record = await this.model.findByPk(id);
        if (!record) return null;
        return await record.destroy();
    }
}

module.exports = UserRepository;

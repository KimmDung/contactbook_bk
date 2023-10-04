const { ObjectId } = require("mongodb");

class ContactService {
    constructor(client) {
        this.Contact = client.db().collection("contact");
    }
    // Định nghĩa các phương thức truy xuất CSDL sử dụng mongo API
    extractContactData(payload){
        const contact = {
            name: payload.name,
            email: payload.email,
            address: payload.address,
            phone: payload.phone,
            favorite: payload.favorite,
        };
        // Remove underfined fields
        Object.keys(contact).forEach(
            (key) => contact[key] == underfined && delete contact[key]
        );
        return contact;
    }

    async create(payload) {
        const contact = this.extractContactData(payload);
        const result = await this.Contact.findOneAndUpdate(
            contact,
            { $set: {favorite: payload.favorite == TRUE}},
            { returnDocument: "after", upsert: true }
        );
        return result;
    }

}

module.exports = ContactService;
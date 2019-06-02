class User {
    constructor() {
        this.baseUrl = "http://localhost:3000";
    }

    async getUsers() {
        const response = await fetch(`${this.baseUrl}/users`);
        const responseJson = await response.json();

        return responseJson;
    }

    async getUser(userId) {
        const response = await fetch(`${this.baseUrl}/users/${userId}`);
        const responseJson = await response.json();

        return responseJson;
    }

    async updateUser(userId, data) {
        const response = await fetch(`${this.baseUrl}/users/${userId}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const responseJson = await response.json();

        return responseJson;
    }

    async createUser(data) {
        const response = await fetch(`${this.baseUrl}/users`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const responseJson = await response.json();

        return responseJson;
    }

    async deleteUser(userId) {
        const response = await fetch(`${this.baseUrl}/users/${userId}`, {
                method: 'DELETE'
            }
        );
        const responseJson = await response.json();

        return responseJson;
    }
}

export default User;

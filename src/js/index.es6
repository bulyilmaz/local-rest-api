import User from "./User.js";

const user = new User();

user.getUsers()
    .then(response => console.log(response))
    .catch(error => console.error(error));

user.getUser(1)
    .then(response => console.log(response))
    .catch(error => console.error(error));

user.createUser({
        "name": "Ahmet",
        "age": 39
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));

user.updateUser(3, {
        "name": "Hasan"
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));

user.deleteUser(3)
    .then(response => console.log(response))
    .catch(error => console.error(error));
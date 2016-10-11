var users = [

    {
        email : 'alex@mail.ru',
        password : '12345',
        lastname : 'Дронов',
        firstname : 'Илья'
    },

    {
        email : 'oleg@mail.ru',
        password : '12345',
        lastname : 'Олегов',
        firstname : 'Олег'
    },

];

function findUser (login, password) {

    for (var i = 0; i < users.length; i++) {
        console.log(users[i]);
        if (users[i].email == login && users[i].password == password) {
            return users[i];
        }
    }

    return false;

}

module.exports.findUser =  findUser;
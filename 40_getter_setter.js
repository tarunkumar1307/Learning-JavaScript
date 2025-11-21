class User {
    constructor(username, password) {
        this.username = username;
        this.password = password
    }

    get username() {
        return this._username;
    }

    set username(Value){
        this._username = Value;
    }
}

const narcos = new User('Narcos', '12345');
console.log(narcos.username);









// how to do this in functional way
function user(username, password) {
    let _username = username;
    let _password = password;

    Object.defineProperty(this, 'username', {
        get: function() {
            return _username;
        },
        set: function(value) {
            _username = value;
        },
    });
    Object.defineProperty(this, 'password', {
        get: function() {
            return _password;
        },
        set: function(value) {
            _password = value.toUpperCase();
        },
    });
}

const bhagadbilla = new user('Bhagad Billa', '54321');
console.log(bhagadbilla.username);
console.log(`Bhagad Billa Password : ${bhagadbilla.password}`);
bhagadbilla.password = 'newpassword';
console.log(`Bhagad Billa Password : ${bhagadbilla.password}`);
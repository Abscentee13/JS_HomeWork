// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(userId, userName, surname, email, phone) {
    this.userId = userId;
    this.userName = userName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
 let users = new Array();
    users[0] = new User('', 'Илон', 'Маск', 'u000@rrr.com', '+380505553300');
    users[1] = new User('', 'Джефф', 'Безос', 'u1111@rrr.com', '+380505553311');
    users[2] = new User('', 'Бернар', 'Гейтс', 'u222@rrr.com', '+380505553322');
    users[3] = new User('', 'Билл', 'Эллисон', 'u333@rrr.com', '+380505553333');
    users[4] = new User('', 'Ларри', 'Пейдж', 'u444@rrr.com', '+380505553344');
    users[5] = new User('', 'Марк', 'Цукерберг', 'u555@rrr.com', '+380505553355');
    users[6] = new User('', 'Сергей', 'Брин', 'u666@rrr.com', '+380505553366');
    users[7] = new User('', 'Уоррен', 'Баффетт', 'u777@rrr.com', '+380505553377');
    users[8] = new User('', 'Стив', 'Балмер', 'u888@rrr.com', '+380505553388');
    users[9] = new User('', 'Гаутам', 'Адани', 'u999@rrr.com', '+380505553399');

    for (let i=0; i<users.length; i++)
    {
        users[i].userId = i;
    }


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
console.log(users.filter((tempUser) => (tempUser.userId % 2 === 0)));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// зроблю по спаданню, щоб була різниця
console.log(users.sort( function (user1, user2)
{
    if (user1.userId > user2.userId) return -1;
    if (user1.userId < user2.userId) return 1;
    if (user1.userId === user2.userId) return 0;
}));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(clientId, clientName, clientSurname, email, phone, order) {
        this.clientId = clientId;
        this.clientName = clientName;
        this.clientSurname = clientSurname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
};


// створити пустий масив, наповнити його 10 об'єктами Client

let clients = new Array();
clients[0] = new Client('', 'Илон', 'Маск', 'u000@rrr.com', '+380505553300', ['aaa', 'bbb', 'ccc', 'ddd', 'eeee', 'fffffff']);
clients[1] = new Client('', 'Джефф', 'Безос', 'u1111@rrr.com', '+380505553311', ['bbb', 'ccc', 'ddd', 'eeee', 'fffffff']);
clients[2] = new Client('', 'Бернар', 'Гейтс', 'u222@rrr.com', '+380505553322', ['aaa', 'bbb', 'ccc', 'ddd', ]);
clients[3] = new Client('', 'Билл', 'Эллисон', 'u333@rrr.com', '+380505553333', ['eeee']);
clients[4] = new Client('', 'Ларри', 'Пейдж', 'u444@rrr.com', '+380505553344', ['aaa', 'bbb', 'ccc', 'ddd', 'eeee', 'fffffff']);
clients[5] = new Client('', 'Марк', 'Цукерберг', 'u555@rrr.com', '+380505553355', ['aaa', 'bbb', 'eeee', 'fffffff']);
clients[6] = new Client('', 'Сергей', 'Брин', 'u666@rrr.com', '+380505553366', ['aaa', 'bbb', 'ddd', 'eeee', 'fffffff']);
clients[7] = new Client('', 'Уоррен', 'Баффетт', 'u777@rrr.com', '+380505553377', ['ccc', 'ddd', 'eeee', 'fffffff']);
clients[8] = new Client('', 'Стив', 'Балмер', 'u888@rrr.com', '+380505553388', ['aaa', 'bbb', 'ccc', 'ddd', 'eeee', 'fffffff']);
clients[9] = new Client('', 'Гаутам', 'Адани', 'u999@rrr.com', '+380505553399', ['eeee', 'fffffff']);

for (let i=0; i<clients.length; i++)
{
    clients[i].clientId = i;
}

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort(function (client1, client2) {
    if (client1.order.length > client2.order.length) return 1;
    if (client1.order.length < client2.order.length) return -1;
    if (client1.order.length === client2.order.length) return 0;
}));


///////////////////////////////////////////////////////////////
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(carModel, carManufacturer, carYear, carMaxSpeed, carEngineVolume) {
    this.carModel = carModel;
    this.carManufacturer = carManufacturer;
    this.carYear = carYear;
    this.carMaxSpeed = carMaxSpeed;
    this.carEngineVolume = carEngineVolume;

    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.carMaxSpeed} на годину`)
    };

    this.info = function (){
        // тут гарно, але костиль ось цей -> if (this[prop].prototype === undefined)
        for (const prop of Object.getOwnPropertyNames(this))
        {
            if (this[prop].prototype === undefined)
            {
                console.log(prop + ' - ' + JSON.stringify(this[prop]));
            }
        }

        //тут негарно, бо коли сворюєм нове поле, воно не виведеться
        //console.log(` carModel - ${this.carModel} \n carManufacturer - ${this.carManufacturer} \n carYear - ${this.carYear} \n carMaxSpeed - ${this.carMaxSpeed} \n carEngineVolume - ${this.carEngineVolume}`);
    };

    this.increaseMaxSpeed = function (newSpeed){
       this.carMaxSpeed += newSpeed;
    };

    this.changeYear = function (newValue){
        this.carYear += newValue;
    };

    this.addDriver = function (driver){
        this['driver'] = driver;
    }
}

let newCar = new Car('Audi', 'Audi', 2010, 210, '2,4');
newCar.drive();
newCar.info();

newCar.increaseMaxSpeed(20);
newCar.info();

newCar.changeYear (-10);
newCar.info();


console.log('додали водія');
newCar.addDriver({name: 'AAa', age: 33});
newCar.info();
newCar.addDriver({name: 'bbb', age: 55});
newCar.info();
// - (Те саме, тільки через клас)


// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('з класами \n')

class classCar
    {
        constructor(carModel, carManufacturer, carYear, carMaxSpeed, carEngineVolume) {
                                this.carModel = carModel;
                                this.carManufacturer = carManufacturer;
                                this.carYear = carYear;
                                this.carMaxSpeed = carMaxSpeed;
                                this.carEngineVolume = carEngineVolume;
                            };

        drive = function(){
                                console.log(`їдемо зі швидкістю ${this.carMaxSpeed} на годину`)
                            };

        info = function ()  {
                            for (const prop of Object.getOwnPropertyNames(this))
                            {
                                if (this[prop].prototype === undefined)
                                {
                                    console.log(prop + ' - ' + JSON.stringify(this[prop]));
                                }
                            }
                            };

        increaseMaxSpeed = function (newSpeed){
                                this.carMaxSpeed += newSpeed;
                            };

        changeYear = function (newValue){
                                this.carYear += newValue;
                            };

        addDriver = function (driver){
                                this['driver'] = driver;
                            };
    };

let newObjectCar = new classCar('Volvo', 'Audi', 2020, 250, '3,4');
newObjectCar.info();

newObjectCar.drive();
newObjectCar.info();

newObjectCar.increaseMaxSpeed(20);
newObjectCar.info();

newObjectCar.changeYear (-10);
newObjectCar.info();


console.log('додали водія');
newObjectCar.addDriver({name: 'AAa', age: 33});
newObjectCar.info();
newObjectCar.addDriver({name: 'bbb', age: 55});
newObjectCar.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
 class fairyTaleCharacter{
                     constructor( name, age, shoeSize) {
                         this.name = name;
                         this.age = age;
                         this.shoeSize = shoeSize;
                     };

                 };

 let girls = new Array();

 for (let i=0; i < 10; i++)
 {
     girls[i] = new fairyTaleCharacter(String.fromCharCode(i + 70, i + 74, i + 76), Math.round(Math.random() * 10 + 15), Math.round(Math.random() * 5 + 15));
 }

console.log(girls);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

let prince = new fairyTaleCharacter('Arnold', 25, 19);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i=0; i < 10; i++)
{
    if (girls[i].shoeSize === prince.shoeSize)
    {
        console.log(girls[i]);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// тут тільки перша
console.log(girls.find((element) => element.shoeSize === prince.shoeSize));

// тут всі
console.log(girls.filter(function (element) {
                                                    if (element.shoeSize === prince.shoeSize)
                                                    {
                                                        return element;
                                                    }
                                            }
                                            ));
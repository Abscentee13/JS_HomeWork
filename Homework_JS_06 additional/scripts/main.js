// - создать массив с 20 числами.



let numArray=[];
numArray.length = 20;
for (let i=0; i<numArray.length; i++)
{
    numArray[i] = Math.round (Math.random()*100);
}
console.log(numArray);

// -- при помощи метода sort и колбека  отсортировать массив.
console.log(numArray.sort( function (a1, a2) {
        if (a1 < a2)
        {
            return -1;
        };
        if (a1 > a2)
        {
            return 1;
        };
        if (a1 === a2)
        {
            return 0;
        };

}));

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

console.log(numArray.sort( function (a1, a2) {
    if (a1 < a2)
    {
        return 1;
    };
    if (a1 > a2)
    {
        return -1;
    };
    if (a1 === a2)
    {
        return 0;
    };

}));

// -- при помощи filter получить числа кратные 3
console.log(numArray.filter(a => (a % 3 ===0)));

// -- при помощи filter получить числа кратные 10
console.log(numArray.filter(a => (a % 10 ===0)));

// -- перебрать (проитерировать) массив при помощи foreach()

numArray.forEach(a => (console.log(a)));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
console.log(numArray.map((a) => ({ a: a*3 })));


/////////////////////////////////////////////////////////////

// - создать массив со словами на 15-20 элементов.

let auto =  [
                'Achleitner',
                'Alba (1907–1908)',
                'Austro (1913–1914)',
                'Austro-Daimler (1899–1934)',
                'Austro-Fiat (1907–1936)',
                'Austro-Rumpler (1920–1922)',
                'Austro-Tatra (1934–1948)',
                'Avis (1921–1928)',
                'Baja (1920–1925)',
                'Braun (1900–1907)',
                'Celeritas (1901–1903)',
                'Custoca (1970–1986)',
                'Denzel (1948–1960)',
                'ESA (1920–1926)',
                'Felber (1952–1954)',
                'Gloriette (1932–1934)',
                'Gloria (1934–1938)',
                'Graf & Stift (1907–1938)',
                'Grofri (1921–1927)',
                'Hoffmann & Czerny (1907)',
                'Jamos (1964)',
                'Kainz (1900–1901)',
                'K.A.N.[de] (1911–1914)'
            ]

// -- отсортировать его по алфавиту в восходящем порядке.

console.log(auto.sort( function (a1, a2) {
    if (a1 < a2)
    {
        return -1;
    };
    if (a1 > a2)
    {
        return 1;
    };
    if (a1 === a2)
    {
        return 0;
    };

}));

// -- отсортировать его по алфавиту  в нисходящем порядке.

console.log(auto.sort( function (a1, a2) {
    if (a1 < a2)
    {
        return 1;
    };
    if (a1 > a2)
    {
        return -1;
    };
    if (a1 === a2)
    {
        return 0;
    };

}));

// -- отфильтровать слова длиной менее 16 символов

console.log(auto.filter(a => (a.length < 16)));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
console.log(auto.map( a => (a +'!')));

////////////////////////////////////////////////////////////////////////////////////////////
// Все робити через функції масивів (foreach, map ...тд)


// Дан масив :
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання )
console.log(users.sort ((user1, user2) => {
    if (user1.age < user2.age)
    {
        return -1;
    };
    if (user1.age > user2.age)
    {
        return 1;
    };
    if (user1.age === user2.age)
    {
        return 0;
    };
}));

// - відсортувати його за  віком (спадання)
console.log(users.sort ((user1, user2) => {
    if (user1.age < user2.age)
    {
        return 1;
    };
    if (user1.age > user2.age)
    {
        return -1;
    };
    if (user1.age === user2.age)
    {
        return 0;
    };
}));

// - відсортувати його за кількістю знаків в імені  (зростання)

console.log(users.sort ((user1, user2) => {
    if (user1.name.length < user2.name.length)
    {
        return -1;
    };
    if (user1.name.length > user2.name.length)
    {
        return 1;
    };
    if (user1.name.length === user2.name.length)
    {
        return 0;
    };
}));
// - відсортувати його за кількістю знаків в імені  спадання)
console.log(users.sort ((user1, user2) => {
    if (user1.name.length < user2.name.length)
    {
        return 1;
    };
    if (user1.name.length > user2.name.length)
    {
        return -1;
    };
    if (user1.name.length === user2.name.length)
    {
        return 0;
    };
}));

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

let usersWithId = users.map((user, index) => ({id: index+1, name: user.name, age: name.age, status: user.status}));


// - відсортувати його за індентифікатором

console.log(usersWithId.sort ((user1, user2) => {
    if (user1.id < user2.id)
    {
        return -1;
    };
    if (user1.id > user2.id)
    {
        return 1;
    };
    if (user1.id === user2.id)
    {
        return 0;
    };
}));



// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком
//






// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, {producer:"mercedes",model: "e63",year 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
//
//





//
// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный
//
//





// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//




//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
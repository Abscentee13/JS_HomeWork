// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

function cutString (str, n)
{
    let sliceArray = [];
    while (str.length > 0) {
        sliceArray.push(str.substring(0, n));
        str = str.substring(n, str.length);
    }
    return sliceArray;
}
let str = "неочікуваний";
let n=5;
console.log(cutString(str, n));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//

function delete_characters(str, length)
{
    return str.substring(0, length);
}

let lengthPartOfString=5;
console.log(delete_characters(str, lengthPartOfString));



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент
// і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//

function insert_dash(str)
{
  return str.toUpperCase()
            .replaceAll(" ", "-");
}

console.log(insert_dash(str));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
// першого символу рядка з нижнього регістру у верхній.
//
str = "первый символ ";
function upper_first_letter(str) {
    return (str[0].toUpperCase() + str.substring(1, str.length - 1));
}
console.log(upper_first_letter(str));

// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//

console.log(validationName(n1));
console.log(validationName(n2));
console.log(validationName(n3));

function validationName (noValidName)
{
    for (let i=0; i<noValidName.length; i++)
    {
        if (!(noValidName.toLowerCase().charCodeAt(i) >= 97 && noValidName.toLowerCase().charCodeAt(i) <=122))
        {
            noValidName = noValidName.replace(noValidName[i], " ")
        }
    }
    while (noValidName !== noValidName.replace("  ", " "))
    {
        noValidName = noValidName.replace("  ", " ");
    }
    return noValidName;
}



//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

n = 10;

numberArray = (n => {
    let numberArray = [];
    for (let i=0; i < n; i++)
        {
            numberArray.push(Math.round(Math.random() * 100));
        }
    return numberArray;

});

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

console.log(numberArray(14).sort(function (num1, num2)
{
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
    if (num1 === num2) return 0;
}));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//

console.log(numberArray(14).filter(num1 => num1 % 2 === 0 && num1 !== 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
str = "первый символ ";

function capitalize(str) {
    let tempArrayString = [];
    str.split(' ').forEach(function (tmpString)
    {
        tempArrayString.push(tmpString.substring(0, 1).toUpperCase() + tmpString.substring(1));
    });
    return tempArrayString.join(' ');
    };

console.log(capitalize(str));


// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//

let mailString = "someemail@gmail.com";

function mailValidation(mailString) {
        return !((mailString.split('@').length !== 2) ||
            (mailString.split('@')[0] === "") ||
            (mailString.split('@')[1] === "") ||
            (mailString.split('@')[1].split('.').length < 2) ||
            (mailString.split('@')[1].split('.')[mailString.split('@')[1].split('.').length-1].length < 2) ||
            (mailString.split('@')[1].split('.')[0].length < 1))
        };
mailString = "someemail@gmail.com";
console.log(mailString + " valid is " + mailValidation(mailString));
mailString = "some.email@gmail.com";
console.log(mailString + " valid is " + mailValidation(mailString));
mailString = "someeMAIL@i.ua";
console.log(mailString + " valid is " + mailValidation(mailString));
mailString = "someeMAIL@i.ua";
console.log(mailString + " valid is " + mailValidation(mailString));
mailString = "someemail@gmail.comsomee@mail@gmail.com";
console.log(mailString + " valid is " + mailValidation(mailString));
mailString = "someeMAIL@.ua";
console.log(mailString + " valid is " + mailValidation(mailString));
mailString = "someemaomsomeegmail.com";
console.log(mailString + " valid is " + mailValidation(mailString));


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//

    console.log(coursesArray.sort(function (obj1, obj2)
    {
        if (obj1.modules.length > obj2.modules.length) return -1;
        if (obj1.modules.length < obj2.modules.length) return 1;
        if (obj1.modules.length === obj2.modules.length) return 0;
    }));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
     let symbol = "о";
     str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5


    console.log('у рядку "' + str + '" ' + count(str, symbol) + ' символів "' + symbol + '"');
    function count (str, symbol) {
        let tempString = str;
        let count = 0;
        while (tempString.indexOf(symbol) !== -1)
        {
            tempString = tempString.replace(symbol, "");
            count++;
        }
        return count;
    };


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
    str = "Сила тяжести приложена к центру масс тела";
    n = 5;

    console.log(cutWords(str, n));
    function cutWords(str, n) {
        let tempArrayString = [];
        for (let i=0; i<n; i++)
            {
                tempArrayString.push(str.split(' ')[i]);
            }
        return tempArrayString.join(' ');
    };

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let book = [

    {name:`foreword`, pageCount: 14, authors: ['AAA', 'BBB', 'CCC'], genre: ['ccc']},
    {name:`boyWhoLived`, pageCount: 18, authors: ['AAA'], genre: ['aaa', 'ccc']},
    {name:`vanishingGlass`, pageCount: 13, authors: ['AAA', 'BBB', ], genre: ['aaa', 'bbb', 'ccc', 'ddd']},
    {name:`lettersFromNoOne`, pageCount: 17, authors: ['BBB', 'CCC'], genre: ['aaa']},
    {name:`afterword`, pageCount: 19, authors: ['CCC'], genre: ['aaa', 'bbb', 'ccc']}

];
console.log(book);

// -знайти наібльшу книжку.
console.log('знайти найбільшу книжку ');
console.log(book.sort(function (book1, book2)
                                                            {
                                                                if (book1.pageCount > book2.pageCount) return -1;
                                                                if (book1.pageCount < book2.pageCount) return 1;
                                                                if (book1.pageCount === book2.pageCount) return 0;
                                                            })[0]);



// - знайти книжку/ки з найбільшою кількістю жанрів

console.log('знайти книжку/ки з найбільшою кількістю жанрів ');
console.log(maxGenre(book));

let maxGenre = (book) => ({book.sort(function (book1, book2)
    {
        if (book1.genre.length > book2.genre.length) return -1;
        if (book1.genre.length < book2.genre.length) return 1;
        if (book1.genre.length === book2.genre.length) return 0;
    })[0]});



// - знайти книжку/ки з найдовшою назвою

console.log('знайти найбільшу книжку ');
console.log(book.sort(function (book1, book2)
{
    if (book1.name.length > book2.name.length) return -1;
    if (book1.name.length < book2.name.length) return 1;
    if (book1.name.length === book2.name.length) return 0;
})[0]);

// - знайти книжку/ки які писали 2 автори


// - знайти книжку/ки які писав 1 автор


// - вісортувати книжки по кількості сторінок по зростанню
console.log('вісортувати книжки по кількості сторінок по зростанню ');
console.log(book.sort(function (book1, book2)
{
    if (book1.pageCount > book2.pageCount) return 1;
    if (book1.pageCount < book2.pageCount) return -1;
    if (book1.pageCount === book2.pageCount) return 0;
}));

//
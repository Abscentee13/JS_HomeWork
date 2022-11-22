// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

function printStringLength(str){
    console.log('довжина \'' + str +'\' '+ str.length);
}
printStringLength('hello world');
printStringLength('lorem ipsum');
printStringLength('javascript is cool');





// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
function printUpperCaseString(str){
    console.log(' \'' + str +'\' '+ str.toUpperCase());
}
printUpperCaseString('hello world');
printUpperCaseString('lorem ipsum');
printUpperCaseString('javascript is cool');






// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

function printLowerCaseString(str){
    console.log(' \'' + str +'\' '+ str.toLowerCase());
}
printLowerCaseString('HELLO WORLD');
printLowerCaseString('LOREM IPSUM');
printLowerCaseString('JAVASCRIPT IS COOL');





// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString=' dirty string   ';
let cleanString = (dirtyString) => console.log(dirtyString.trim());
cleanString(dirtyString);





// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => {
    return  str.split(' ');
}
console.log(stringToArray(str));




// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let nums=[10,8,-7,55,987,-1011,0,1050,0];

let stringArray = nums.map(num=>num.toString());
console.log(stringArray);




// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
nums = [11,21,3];

/////////// тут через стрілочну не получається
/////// не розумію чому
////// мало би вертати відсортований масив
   let sortNumsArray = (nums) => {

       let nn = nums.sort(function (num1, num2)
                            {
                               if (num1 > num2) return -1;
                               if (num1 < num2) return 1;
                               if (num1 === num2) return 0;
                            })
       return nn;
   }
console.log(sortNumsArray);

   ///////// через просту функцію нормально //////////////////////
function sortNums (nums, direction) {
    return nums.sort(function (num1, num2)
    {
        if (num1 > num2) return direction;
        if (num1 < num2) return -direction;
        if (num1 === num2) return 0;
    })
}

// sortNums(nums,'ascending') // [3,11,21]
console.log(sortNums(nums, 1));// 1 по зростанню, -1 по спаданню
// sortNums(nums,'descending') // [21,11,3]
console.log(sortNums(nums, -1));// 1 по зростанню, -1 по спаданню
//////////////////////////////////////////










// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration


console.log(coursesAndDurationArray.sort(function (cur1, cur2)
{
    if (cur1.monthDuration > cur2.monthDuration) return -1;
    if (cur1.monthDuration < cur2.monthDuration) return 1;
    if (cur1.monthDuration === cur2.monthDuration) return 0;
}));


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let moreThenFiveMonthCourse = coursesAndDurationArray.filter((course) => course.monthDuration > 5);
console.log(moreThenFiveMonthCourse);



// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//ініціалізація колоди
let cardSuits = ['spade', 'diamond','heart', 'clubs'];
let ranks = ['6', '7', '8', '9', '10', 'jack','queen','king','ace'];

let cards=[];
        for (let i1 = 0; i1 < cardSuits.length; i1++)
        for (let i2 = 0; i2 < ranks.length; i2++)
            {
                cards.push(Object.assign({},{cardSuit: cardSuits[i1], rank: ranks[i2], color:(cardSuits[i1]==='diamond' || cardSuits[i1]==='heart'? 'red': 'black')}));
            }
cards.push ({ rank: 'joker', cardSuit: 'noSuits',color: 'red'}, { rank: 'joker', cardSuit: 'noSuits', color: 'black'});

        // for (const card of cards)
        //     {
        //         document.write ('<div class="output_block">' + card.rank + card.cardSuit + card.color + '</div>');
        //     }
//кінець ініціалізації



// - знайти піковий туз
console.log(cards.filter((card) => card.rank==='ace' && card.cardSuit==='spade'));

// - всі шістки
console.log(cards.filter((card) => card.rank==='6'));

// - всі червоні карти
console.log(cards.filter((card) => card.color==='red'));

// - всі буби
console.log(cards.filter((card) => card.cardSuit==='diamond'));

// - всі трефи від 9 та більше
console.log(cards.filter((card) => ['9', '10', 'jack','queen','king','ace'].includes(card.rank) && card.cardSuit==='clubs'));






// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

//ЯК ЗАВДАННЯ ЗРОЗУМІЛА ТАК ЗРОБИЛА

let spades = [];
let diamonds = [];
let hearts = [];
let clubs = [];

spades = cards.reduce((suitSortCardArray, card) => {
                    if (card.cardSuit === 'spade')
                        {
                            suitSortCardArray.push(card)
                        }
                    return suitSortCardArray;
                    }
            , []);

diamonds = cards.reduce((suitSortCardArray, card) => {
        if (card.cardSuit === 'diamond')
        {
            suitSortCardArray.push(card)
        }
        return suitSortCardArray;
    }
    , []);

hearts = cards.reduce((suitSortCardArray, card) => {
        if (card.cardSuit === 'heart')
        {
            suitSortCardArray.push(card)
        }
        return suitSortCardArray;
    }
    , []);
clubs = cards.reduce((suitSortCardArray, card) => {
        if (card.cardSuit === 'club')
        {
            suitSortCardArray.push(card)
        }
        return suitSortCardArray;
    }
    , []);

let desk=[];
desk.push(spades, diamonds, hearts, clubs);
console.log(desk);

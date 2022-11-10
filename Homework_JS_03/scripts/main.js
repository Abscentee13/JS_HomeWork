// Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте  скрипт при a, що дорівнює 1, 0, -3


document.write('<div class="output_block">');
let x = 1;
if (x == 0) {
    document.write("x=" + x.toString() + " ");
    document.write("Вірно");
} else {
    document.write("x=" + x.toString() + " ");
    document.write("Не вірно");
}
document.write("<br>");

//******
x = 0;
if (x == 0) {
    document.write("x=" + x.toString() + " ");
    document.write("Вірно");
} else {
    document.write("x=" + x.toString() + " ");
    document.write("Не вірно");
}
document.write("<br>");

//******
x = -3;
if (x == 0) {
    document.write("x=" + x.toString() + " ");
    document.write("Вірно");
} else {
    document.write("x=" + x.toString() + " ");
    document.write("Не вірно");
}
document.write("<br>");
document.write('</div>');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

document.write('<div class="output_block">');
//красиво
let time = Math.round((Math.random() * 60));

document.write("Зараз " + time.toString() + " хвилин <br>");
document.write("Це " + (Math.floor(time / 15) + 1) + " чверть <br>");

// через if

if (time >= 0 && time < 15) {
    document.write("Це перша чверть");
} else if (time >= 15 && time < 30) {
    document.write("Це друга чверть");
} else if (time >= 30 && time < 45) {
    document.write("Це третя чверть");
} else {
    document.write("Це четверта чверть");
}

document.write("<br>");
document.write('</div>');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
document.write('<div class="output_block">');
let day = Math.round((Math.random() * 30) + 1);
document.write("Зараз " + day.toString() + "-й день <br>");

if (day >= 1 && day < 10) {
    document.write("Це перша декада");
} else if (day >= 11 && day < 20) {
    document.write("Це друга декада");
} else {
    document.write("Це третя декада");
}
document.write("<br>");
document.write('</div>');

//Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

document.write('<div class="output_block">');
let dayOfWeek = Math.round((Math.random() * 6) + 1);//щоб не вводити постійно
//let dayOfWeek=+prompt();


switch (dayOfWeek) {
    case 1:
        document.write("перший день відпочити");
        break;
    case 2:
        document.write("вівторок працюємо");
        break;
    case 3:
        document.write("середа дивимось меми");
        break;
    case 4:
        document.write("четвер плануємо п’ятницю");
        break;
    case 5:
        document.write("гуляємо");
        break;
    case 6:
        document.write("на природу");
        break;
    case 7:
        document.write("НЕДІЛЯ");
        break;
    default: document.write("нема такого");
        break;
}

document.write("<br>");
document.write('</div>');
//  - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

document.write('<div class="output_block">');
let a = 12;
let b = null;

if (a > b) {
    document.write("а більше");
} else if (a < b) {
    document.write("b більше");
} else if (a === b){
    document.write("a та b рівні");
}
else {
    document.write("не можу порівняти");
}


document.write("<br>");
document.write('</div>');
// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
//        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//        (хибноподыбне, тобто кастується до false)


document.write('<div class="output_block">');
///1
    let X = +prompt() || 'default';
    document.write("1 "+ X);
document.write("<br>");

///2 ТУТ ВЗАГАЛІ НЕ ПРАЦЮЄ
    X = prompt();
    if (X === false || X === null || X === undefined || X === 0) {
        document.write("2 default ");
        X = "default";
    }
document.write("<br>");
///3
    if (!!X === false) {
        document.write("3 default");
    }else {
        document.write("3 " + X);
    }

document.write("<br>");
document.write('</div>');
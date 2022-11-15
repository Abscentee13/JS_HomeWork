




//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

document.write(rectangleSquare (4, 6) + '<br>');

function rectangleSquare (a, b)
{
    return a * b;
}

//- створити функцію яка обчислює та повертає площу кола з радіусом r
document.write(circleSquare (5) + '<br>');

function circleSquare (r)
{
    return Math.PI * r * r;
}

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

document.write (cylinderSquare(5, 3) + '<br>');

function cylinderSquare(r, h)
{
    return Math.PI * r * r * h;
}

//- створити функцію яка приймає масив та виводить кожен його елемент

let arrayNumber = [4, 5, 6, 3, 2, 3, 5, 6, 67, 54, 3, 3, 2];
arrayPrint(arrayNumber);

function arrayPrint(tempArray)
{
    for (let a in tempArray)
    {
        document.write(a + '<br>');
    }
}

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

textPrint("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

function textPrint(tempText)
{
        document.write ('<p class="output_block">' + tempText  + '</p><br>');
}

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

listPrint("Amigo");

function listPrint(tempText)
{
    document.write ('<ul>');
    document.write ('<li>' + tempText + '</li>');
    document.write ('<li>' + tempText + '</li>');
    document.write ('<li>' + tempText + '</li>');
    document.write ('</ul>');
}


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

anotherListPrint("Amogus", 5);

function anotherListPrint(tempText, n)
{
    document.write ('<ul>');
    for (let i=1; i<=n; i++)
    {
        document.write('<li>' + tempText + '</li>');
    }
    document.write ('</ul>');
}


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


let arrayStuff = ["Перший", 5, "Третій", 3, 2, 3.12121212, 5, 6, 67, 54, 3, 3, 2];
//////////////// ТУТ НЕ ПОНЯЛА чого виводить індекси
        arrayListPrint1(arrayStuff);

        function arrayListPrint1(tempArrayStuff)
        {
            document.write ('<ul>');
            for (let tempStuff in tempArrayStuff)
            {
                document.write('<li>' + tempStuff + '</li>');
            }
            document.write ('</ul>');
        }


///////////////// ТУТ ІНШИМ ЦИКЛОМ

        arrayListPrint2(arrayStuff);

        function arrayListPrint2(tempArrayStuff)
        {
            document.write ('<ul>');
            for (let i=0; i<tempArrayStuff.length; i++)
            {
                document.write('<li>' + tempArrayStuff[i] + '</li>');
            }
            document.write ('</ul>');
        }

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 0,     name: 'vasya',  age: 31},
    {id: 1,     name: 'petya',  age: 30},
    {id: 2,     name: 'kolya',  age: 29},
    {id: 3,     name: 'olya',   age: 28},
    {id: 4,     name: 'max',    age: 30},
    {id: 5,     name: 'anya',   age: 31},
    {id: 6,     name: 'oleg',   age: 28},
    {id: 7,     name: 'andrey', age: 29},
    {id: 8,     name: 'masha',  age: 30},
    {id: 9,     name: 'olya',   age: 31},
    {id: 10,    name: 'max',    age: 31}
];

arrayUsersPrint(users);

        function arrayUsersPrint(tempArrayUsers)
        {
            for (let i=0; i<tempArrayUsers.length; i++)
            {
                document.write ('<div class="output_block">');
                    document.write ('<ul>');
                        document.write('<li>' + tempArrayUsers[i].id + '</li>');
                        document.write('<li>' + tempArrayUsers[i].name + '</li>');
                        document.write('<li>' + tempArrayUsers[i].age + '</li>');
                    document.write ('</ul>');
                document.write ('</div>');
            }
        }

//- створити функцію яка повертає найменьше число з масиву

arrayNumber = [4, 5, 6, 3, 2, 3, 5, 6, 67, 54, 3, 3, 2];

document.write ('Найменше число ' + arrayMinElement(arrayNumber) + '<br>');

function arrayMinElement(tempArray)
{
    let minElement=tempArray[0];
    for (let i=0; i<tempArray.length; i++)
    {
        if (minElement > tempArray[i])
            {
                minElement = tempArray[i];
            }
    }
    return minElement;
}

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

arrayNumber = [4, 5, 6, 3, 2, 3, 5, 6, 67, 54, 3, 3, 2];

document.write ('Сума чисел ' + arraySumElement(arrayNumber) + '<br>');

function arraySumElement(tempArray)
{
    let sum=0;
    for (let i=0; i<tempArray.length; i++)
    {
        sum+=tempArray[i];
    }
    return sum;
}
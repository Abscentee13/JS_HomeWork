

let array1=[12, 12.4, -10, true, false, "aaa", "bbbbb", 1494, 4, 0.22222];

for (let i=0; i<array1.length; i++)
    console.log(i+' '+array1[i]);


//*****************************

let book1={
    title: "1984",
    pageCount: "123",
    genre: "fiction"
};

let book2={
    title: "Quit",
    pageCount: "321",
    genre: "detective"
};

let book3={
    title: "Bim-bom",
    pageCount: "311",
    genre: "story"
};

//*********************************

let book01={
    title: "1984",
    pageCount: "123",
    genre: "fiction",
    authors: [
                {
                    name: "Andy",
                    age: 33
                },
                {
                    name: "Tom",
                    age: 32
                }
             ]
};

let book02={
    title: "Quit",
    pageCount: "321",
    genre: "detective",
    authors:[
                {
                    name: "Boba",
                    age: 23
                },
                {
                    name: "Buba",
                    age: 24
                },
                {
                    name: "Fibi",
                    age: 25
                }
            ]
};

let book03={
    title: "Bim-bom",
    pageCount: "311",
    genre: "story",
    authors:[
                {
                    name: "Shusha",
                    age: 23
                },
                {
                    name: "Shosha",
                    age: 24
                }
            ]
};

//************************************

let users=  [
                {
                    name: "aaa",
                    username: "aaaaaaa",
                    password: "a11111"
                },
                {
                    name: "bbb",
                    username: "bbbbbbb",
                    password: "b2222"
                },
                {
                    name: "ccc",
                    username: "ccccccc",
                    password: "c33333"
                },
                {
                    name: "ddd",
                    username: "ddddddd",
                    password: "d44444"
                },
                {
                    name: "eee",
                    username: "eeeeeee",
                    password: "e55555"
                },
                {
                    name: "fff",
                    username: "fffffff",
                    password: "f66666"
                },
                {
                    name: "ggg",
                    username: "ggggggg",
                    password: "g77777"
                },
                {
                    name: "hhh",
                    username: "hhhhhhh",
                    password: "h88888"
                },
                {
                    name: "iii",
                    username: "iiiiiii",
                    password: "i999999"
                },
                {
                    name: "jjj",
                    username: "jjjjjjj",
                    password: "j000000"
                }
            ]
console.log("Паролі");
for (let i=0; i<users.length; i++)
    console.log(i+' '+users[i].password);
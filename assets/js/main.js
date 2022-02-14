// Array-Methods Multi-Arrays Lev1_1_1 //

let myAdress = [
    'Stärkestraße',
    30451,
    'Hannover',
    'Niedersachsen'
]

let myFriends = [
    'Marta',
    'Lena',
    'Doro',
    'Ale',
    'Uli'
]

let person = [
    'Mercedes',
    'Wagner',
    'Mercy',
    37,
    'Skateboarden',
    'Hann. Münden',
    'Web Development Bootcamp',
    ['Stärkestraße', 30451, 'Hannover', 'Niedersachsen'],
    ['Marta', 'Lena', 'Doro', 'Ale', 'Uli']
]

console.log(myAdress);
console.log(myFriends);
console.log(person);
console.log('This is the array person: ' + person);
console.log('This is the array myfriends inside person: ' + person[8]);
console.log('This is the array myAdress inside person: ' + person[7]);



// Array-Methods .length Lev1_1_2 //

console.log('This is the array length of person: ' + person.length); // 9???
console.log('This is the array length of myAdress: ' + person[7].length); // 4
console.log('This is the array length of myFriends: ' + person[8].length); // 5



// Array-Methods 3 different ways to create arrays Lev1_2 //

let myTrainer = [
    'Eric',
    'Simon',
    'Steffen',
    'Ahmed'
]
console.log(myTrainer);

let myTrainer2 = new Array('Eric', 'Simon', 'Steffen', 'Simon',);
console.log(myTrainer2);

let myTrainer3 = new Array();
myTrainer3[0] = 'Eric';
myTrainer3[1] = 'Simon';
myTrainer3[2] = 'Steffen';
myTrainer3[3] = 'Ahmed';
console.log(myTrainer3);



// Array-Methods Index Lev1_3 //

let numberArray = [
    5,
    6,
    7,
    8,
    9,
    10
]
console.log(numberArray);
console.log(numberArray[4]);
console.log(numberArray[0]);
console.log(numberArray[1]);
console.log(numberArray[2]);
console.log(numberArray[3]);
console.log(numberArray[5]);



// Array-Methods .split Lev1_4 //

let myText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.'
console.log(myText1);
let myArray1 = myText1.split('');
console.log(myArray1);

let myText2 = 'Wie geht es dir heute?'
console.log(myText2);
let myArray2 = myText2.split(' ');
console.log(myArray2);

let myText3 = 'Heute ist ein großer Tag für uns.'
console.log(myText3);
let myArray3 = myText3.split(' ');
let word = myArray3[4];
console.log(word);

let myArray4 = myText1.split(' ', 5);
console.log(myArray4);



// Array-Methods .push Lev1_5_1 //

let songs = [
    'Bohemian Rapsody',
    'Stairway to Heaven',
    'Hotel California'
]
console.log(songs);

songs.push('Sultans of Swing');
console.log(songs);

songs.push("Don't fear the reaper");
console.log(songs);

songs.push('All along the watchtower');
console.log(songs);

songs.push('Another brick in the wall', 'Imagine');
console.log(songs);

let totalSongs = songs
console.log(totalSongs);



// Array-Methods .push Arrays Lev1_5_2 //

let heroAndEnemy = [
    ['Batman', 'The Joker'],
    ['Professor X', 'Magneto'],
    ['Thor', 'Loki']
]

heroAndEnemy.push(['Superman', 'Lex Luthor']);
console.log(heroAndEnemy);

heroAndEnemy.push(['Wolverine', 'Sabretooth']);
console.log(heroAndEnemy);

heroAndEnemy.push(['Ghost Rider', 'Mephisto']);
console.log(heroAndEnemy);



// Array-Methods .pop Lev1_6 //

let lonelySong = totalSongs.pop();
console.log(lonelySong);
console.log(totalSongs);



// Array-Methods .unshift Lev1_7 //

let deutscheGerichte = [
    'Speckkuchen',
    'Thüringer Rostbratwurst',
    'Quarkeulchen',
    'Sauerbraten',
]

deutscheGerichte.unshift('Himmel und Erde');
deutscheGerichte.unshift('Kartoffelpuffer mit Apfelmus');
deutscheGerichte.unshift('Grünkohl mit Einlage');
console.log(deutscheGerichte);



// Array-Methods .shift Lev1_8 //

let nichtGut1 = deutscheGerichte.shift();
let nichtGut2 = deutscheGerichte.shift();
let nichtGut3 = deutscheGerichte.shift();

let nichtGut = new Array('Himmel und Erde', 'Kartoffelpuffer mit Apfelmus', 'Grünkohl mit Einlage')
console.log(nichtGut);



// Array-Methods .shift Lev1_9 //

let something = new Array(23, 54, 75);

something.push(17, 11, 84, 4, 5, 86)
console.log(something);

something.unshift(2022, 2021, 2020, 2019, 2018)
console.log(something);

something.pop();
something.pop();
console.log(something);

something.shift();
something.shift();
console.log(something);



// Array-Methods .splice() Lev1_10 //

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

let delImg1 = array.splice(4, 4);
console.log(delImg1);

let delImg2 = array.splice(6, 5);
console.log(delImg2);

let delImg3 = array.splice(3);
console.log(delImg3);



// Array-Methods .splice() Lev1_11 //

var array2 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
];

array2.splice(2, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg");
console.log(array2);

array2.splice(6, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg");
console.log(array2);

array2.splice(2, 0, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg");
console.log(array2);

array2.splice(11, 0, "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg", "imageTeilnehmer013supercode.jpg");
console.log(array2);



// Array-Methods .splice() Lev1_12 //

let array3 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];

let copyImg1 = array3.slice(7, 15);
console.log(copyImg1);
console.log(array3);

let copyImg2 = array3.slice(6, 12);
console.log(copyImg2);

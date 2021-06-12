let img_86 = [
    "86_01.png",
    "86_02.png",
    "86_03.png",
    "86_04.png",
];

let img_higehiro = [
    "Higehiro_01.png",
    "Higehiro_02.png",
    "Higehiro_03.png",
    "Higehiro_04.png",
];

let img_taoshite = [
    "Taoshite_01.png",
    "Taoshite_02.png",
    "Taoshite_03.png",
    "Taoshite_04.png",
];

let t_left = document.querySelector("#t_left");
let t_right = document.querySelector("#t_right");
let es_left = document.querySelector("#es_left");
let es_right = document.querySelector("#es_right");
let h_left = document.querySelector("#h_left");
let h_right = document.querySelector("#h_right");


let x = 0;
let y = 0;
let z = 0;

let pict_01 = document.getElementById("t");
let pict_02 = document.getElementById("es");
let pict_03 = document.getElementById("h");

function plus01() {
    x++;

    if(x == img_taoshite.length){x = 0;}
    pict_01.src = 'assets/' + img_taoshite[x];
}

function minus01(){
    x--;

    if(x == -1){x = img_taoshite.length-1;}
    pict_01.src = 'assets/' + img_taoshite[x];
}

function plus02() {
    y++;

    if(y == img_86.length){y = 0;}
    pict_02.src = 'assets/' + img_86[y];
}

function minus02(){
    y--;

    if(y == -1){y = img_86.length-1;}
    pict_02.src = 'assets/' + img_86[y];
}

function plus03() {
    z++;

    if(z == img_higehiro.length){z = 0;}
    pict_03.src = 'assets/' + img_higehiro[z];
}

function minus03(){
    z--;

    if(z == -1){z = img_higehiro.length-1;}
    pict_03.src = 'assets/' + img_higehiro[z];
}

t_right.addEventListener("click", plus01);
t_left.addEventListener("click", minus01);

es_right.addEventListener("click", plus02);
es_left.addEventListener("click", minus02);

h_right.addEventListener("click", plus03);
h_left.addEventListener("click", minus03);
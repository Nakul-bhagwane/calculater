const screen = document.getElementById('screen');
let buttons = document.getElementsByClassName('btn');
let master = '';


window.addEventListener("keypress", (i) => {
    let value = i.key;
    console.log(i);

    if (value == "1" || value == "2" || value == "3" || value == "4" || value == "5" || value == "6" || value == "7" || value == "8" ||
        value == "9" || value == "0" || value == "+" || value == "-" || value == "*" || value == "/" || value == "=" || value == "X" ||
        value == "x" || value == "Enter") {

        if (value == "=" || value == "Enter") {
            screen.value = eval(master);
        }
        else if (value == "AC") {
            master = " ";
            screen.value = " ";
        }
        else if(value == "X" ||value == "x"){
            value = "*"
            master += value;
            screen.value = master;
        }
        else if(value == "Enter"){
            // value = "=";
            // master += value;
            // screen.value = master;
        }
        else {
            master += value;
            screen.value = master;
        }
    }
});



for (let i of buttons) {
    i.addEventListener('click', () => {
        let value = i.innerHTML;

        if (value == "=") {
            screen.value = eval(master);
        }
        else if (value == "AC") {
            master = " ";
            screen.value = " ";
        }
        else if (value == "Del") {
            let del_value = master.slice(0, master.length - 1);
            master = del_value
            screen.value = master;
        }
        else if(value == "X"){
            value = "*"
            master += value;
            screen.value = master;
        }
        else {
            master += value;
            screen.value = master;
        }
    });
};


// let ar = "156374";
// let length = ar.length;
// let value = ar.slice(0, 5)
// console.log();

let x = "X";
let b = "*";

x =  b;
console.log(x);

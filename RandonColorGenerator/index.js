let b1 = document.getElementById("btn1");
let b2 = document.getElementById("btn2");

const randomColor = () => {
    let decimals = "0123456789abcdef";
    let colors = '#';
    for (let i = 0; i < 6; i++) {  // Loop runs 6 times to create a 6-digit hex color code
        colors += decimals[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const color1 = () => {
    let c1 = randomColor();
    console.log(c1);
    b1.style.backgroundColor=c1;
}


const color2 = () => {
    let c2 = randomColor();
    console.log(c2);
    b2.style.backgroundColor=c2;
}




b1.addEventListener("click", color1);
b2.addEventListener("click",color2);
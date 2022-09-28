let bg = document.querySelector("main")
let loadingText = document.querySelector(".percent");
console.log(bg.style);

// loadingText.innerHTML = 200;
let load = 0;

let loader = setInterval(() => {
    load ++;
    if (loadingText.innerHTML === "100%") {
        clearInterval(loader);
    }
    loadingText.innerHTML = `${load}%`;
    calcBlur()
    calcOpacity()
}, 30);

const calcBlur = () => {
    let blur = (load/100) * (30/1);
    console.log(blur);
    bg.style.filter = `blur(${30-blur}px)`;
}

const calcOpacity = () => {
    let opacity = 1 - (load/100)
    loadingText.style.opacity = opacity;
}
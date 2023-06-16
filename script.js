const container = document.querySelector(".container");

function createGrid(n)
{
    let contSize = 700;
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for(let i = 0; i < n; i++)
    {
        let row = document.createElement("div");
        row.setAttribute("style","display :flex;");
        for(let j = 0; j < n; j++)
        {
            let div = document.createElement("div");
            div.style.width = contSize/n + 'px';
            div.style.height = contSize/n + 'px';
            div.classList.add("square");
            //div.textContent = `${j}`;
            //div.setAttribute("style",`padding: ${960/n}px; margin: 0px; border-style: solid`);
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    const divs = document.querySelectorAll(".square");
    //console.log(divs);
    divs.forEach((square) => {
        square.addEventListener("mouseenter",()=>
        {
            //console.log("in");
            square.classList.add("divHover");
        })
        square.addEventListener("mouseleave",()=>
        {
            square.classList.remove("divHover");
        })
        square.addEventListener("mousedown", ()=>
        {
            //square.classList.add("divClick");
            //console.log(generateRandomColor());
            if(!square.classList.contains('coloured'))
            {
                square.style.backgroundColor = generateRandomColor();
                square.style.opacity = 0.1;
                square.classList.add("coloured");
            }
            else if(Number(square.style.opacity)!==1)
            {
                square.style.opacity = Number(square.style.opacity) + 0.1;
                console.log(square.style.opacity);
            }
        })
    });
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function promptUser()
{
    let num = parseInt(prompt("Please enter size of grid to be created(1 to 100)"));
    while(isNaN(num) || num<1 || num>100)
    {
        num = prompt("Invalid input. Please try again\nEnter size of grid to be created(1 to 100)");
    }
    createGrid(num);
}

const button = document.querySelector("button");
button.addEventListener("click",() =>
{
    promptUser();
});

//promptUser()
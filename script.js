const container = document.querySelector(".container");

function createGrid()
{
    for(let i = 0; i < 16; i++)
    {
        let row = document.createElement("div");
        row.setAttribute("style","display :flex;");
        for(let j = 0; j < 16; j++)
        {
            let div = document.createElement("div");
            div.classList.add("square");
            //div.textContent = `${j}`;
            div.setAttribute("style","padding : 10px; margin: 2px; border-style: solid")
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    const divs = document.querySelectorAll(".square");
    //console.log(divs);
    divs.forEach((square) => {
        square.addEventListener("mouseenter",()=>
        {
            console.log("in");
            square.classList.add("divHover");
        })
        square.addEventListener("mouseleave",()=>
        {
            square.classList.remove("divHover");
        })
    });
}

createGrid()
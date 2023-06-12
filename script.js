const container = document.querySelector(".container");

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
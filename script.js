const container = document.querySelector(".container");
container.setAttribute("style","display: flex; flex-direction: column;")

for(let i = 0; i < 16; i++)
{
    let row = document.createElement("div");
    row.setAttribute("style","display :flex;");
    for(let j = 0; j < 16; j++)
    {
        let div = document.createElement("div");
        div.textContent = `${j}`;
        row.appendChild(div);
    }
    container.appendChild(row);
}
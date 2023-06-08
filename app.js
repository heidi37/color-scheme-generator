const button = document.querySelector("button");
const color = document.querySelector("#color");
const scheme = document.querySelector("#scheme");
const hexColorText = document.querySelectorAll(".hex");

fetch(`https://www.thecolorapi.com/scheme?hex=ffffff&mode=monochrome&count=5`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
                for(let i = 0; i < 5; i++)
                {
                    document.querySelector(`#bar-${i}`).style.backgroundColor = data.colors[i].hex.value;
                    document.querySelector(`#hex-${i}`).innerHTML = data.colors[i].hex.value;
                }
            });

button.addEventListener("click", function(e){
    e.preventDefault();
    const apiColor = color.value.slice(1);
    const apiScheme = scheme.value;
    fetch(`https://www.thecolorapi.com/scheme?hex=${apiColor}&mode=${apiScheme}&count=5`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
                for(let i = 0; i < 5; i++)
                {
                    document.querySelector(`#bar-${i}`).style.backgroundColor = data.colors[i].hex.value;
                    document.querySelector(`#hex-${i}`).innerHTML = data.colors[i].hex.value;
                }
            });
});

hexColorText.forEach(item => {
item.addEventListener("click", function() {
    let text = item.textContent;
	navigator.clipboard.writeText(`${text}`);
    setTimeout(async()=>alert(
        await `${text} copied to clipboard!`), 1000);
    });
});

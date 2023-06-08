const button = document.querySelector("button");
const color = document.querySelector("#color");
const scheme = document.querySelector("#scheme");
const bar0 = document.querySelector("#bar-0");


console.log(button);
console.log(color.value);
console.log(scheme.value);

button.addEventListener("click", function(e){
    e.preventDefault()
    const apiColor = color.value.slice(1);
    const apiScheme = scheme.value;
    console.log(color.value.slice(1))
    console.log(scheme.value);
    fetch(`https://www.thecolorapi.com/scheme?hex=${apiColor}&mode=${apiScheme}&count=5`, {method: "GET"})
        .then(response => response.json())
        .then(data => {
                console.log(data.colors[0].hex.value)
                bar0.style.backgroundColor = data.colors[0].hex.value;
                // for(let i = 0; i < 5; i++)
                // {
                //     // document.querySelector("#bar-[i]").style.backgroundColor = data.colors[i].hex.value;

                // }
            })

})

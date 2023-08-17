let x = document.getElementsByTagName("button");
let x2 = x[0];
let list = document.getElementById("list")


x2.addEventListener("click",function(event) {
    async function fetchText() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    console.log(data);
    for(i = 0; i < data.length; ++i)
    {
        var li = document.createElement('li');
        li.innerHTML = Object.values(data[i]);
        list.appendChild(li);
    }
    }
    fetchText();
})


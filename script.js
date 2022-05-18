//"avatar_url": "https://avatars.githubusercontent.com/u/91963183?v=4",
//"name": null,
//"public_repos": 5,

function buscar(){
    let nombre = document.getElementById("nombre").value;
    fetch(`https://api.github.com/users/${nombre}`)
    .then(res=>res.json())
    .then(
        
    )
}
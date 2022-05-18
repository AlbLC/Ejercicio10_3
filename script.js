//"avatar_url": "https://avatars.githubusercontent.com/u/91963183?v=4",
//"name": null,
//"public_repos": 5,

function buscar() {
    let parrafo=document.createElement("p");
    // let texto=document.createTextNode();
    let nombre = document.getElementById("nombre").value;
    let nombre1 = "";
    let avatar1 = "";
    let repos1 = "";
    fetch(`https://api.github.com/users/${nombre}`)
        .then(res => res.json())
        .then(json =>  {let a = json.name
            let b = json.avatar_url
            let c = json.public_repos
            var texto1 = document.createTextNode("Nombre: "+a+" Avatar: "+b+" Repo: "+c);
            
            parrafo.appendChild(texto1)
            document.body.appendChild(parrafo)

        }
      
            )
       
    }
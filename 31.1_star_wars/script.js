async function getApi(){
    try{
        let index = 1;
        let characters = [];
        let character = undefined;
        while(index <= 10){
            character = await fetch(`https://swapi.dev/api/people/${index}`);
            let data = await character.json();
            characters.push(data);
            index += 1;
        }
        return characters;
    }
    catch(error){   
        console.log(error);
    }
}


function addElement(data) {
    const container = document.getElementById("container");
    const newElement = document.createElement("p");
    newElement.textContent = data;
    container.appendChild(newElement);
}

function tryPush(){
    data = getApi();
    addElement(data[0].name)
}
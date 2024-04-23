let p1_name = "John";
let p2_name = "Alice";
function displayDetails()
{
   fetch('https://pokeapi.co/api/v2/pokemon/')
   .then((response)=>{
    return response.json();
   })
   .then((response)=>{
    const r = Math.floor(((Math.random())*20));
    return fetch(response.results[r].url);
   })
   .then((response)=>{
    return response.json();
   })
   .then((response)=>{
    DisplayUser1(response);
    return fetch('https://pokeapi.co/api/v2/pokemon/');
   })
   .then((response)=>{
    return response.json();
   })
   .then((response)=>{
    const r = Math.floor(((Math.random())*20));
    return fetch(response.results[r].url);
   })
   .then((response)=>{
    return response.json();
   })
   .then((response)=>{
    DisplayUser2(response);
   })
}

displayDetails();
function DisplayUser1(response)
{
    console.log(response);
    document.getElementById("p1_name").textContent=p1_name;
    document.getElementById("p1_score").textContent= `Score`
    const card1 = document.getElementById("card1");
    card1.querySelector("#name").textContent = response.name;
    const imgc1 = document.createElement("img");
    imgc1.setAttribute('src',response.sprites.other.dream_world.front_default);
    imgc1.style.height = '300px';
    imgc1.style.width = '300px';
    card1.querySelector("#img").innerHTML = " ";
    card1.querySelector("#img").append(imgc1);
    const lst = card1.querySelector("#abilities");
    const abilities = response.abilities;
    for(let i of abilities)
    {
        const li =document.createElement('li');
        li.textContent = i.ability.name;
        lst.append(li);
    }
    const exp = card1.querySelector('#experience')
    exp.textContent = response.base_experience;
                

}

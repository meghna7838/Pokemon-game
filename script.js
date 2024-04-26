let p1_name = "John";
let p2_name = "Alice";
let score1 = 0;
let score2 = 0;

async function getPokemon(id)
{
    //console.log(id);
    const response = await fetch(id)
    const pokemon = await response.json();
    return pokemon;
}
async function displayDetailsOfPokemon()
{
   const response = await getPokemon('https://pokeapi.co/api/v2/pokemon/');
    const r = Math.floor(((Math.random())*20));
    const getIt= await getPokemon(response.results[r].url);
    DisplayUser1(getIt);
    const res = await getPokemon('https://pokeapi.co/api/v2/pokemon/');
    const r2 = Math.floor(((Math.random())*20));
    const getIt2 = await getPokemon(response.results[r2].url);
    DisplayUser2(getIt2);
   
   }


function DisplayUser1(response)
{
    console.log(response);
    document.getElementById("p1_name").textContent=p1_name;
    document.getElementById("p1_score").textContent= `Score: ${score1}`;
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

function DisplayUser2(response)
{
    document.getElementById("p2_name").textContent = p2_name;
    document.getElementById("p2_score").textContent = `Score: ${score2}`;
    const card2 = document.getElementById("card2");
    card2.querySelector("#name").textContent = response.name;
    const imgc2 = document.createElement('img');
    imgc2.setAttribute('src',response.sprites.other.dream_world.front_default);
    imgc2.style.height = '300px';
    imgc2.style.width = '300px';
    card2.querySelector('#img').innerHTML = '';
    card2.querySelector('#img').append(imgc2);
    card2.querySelector('#experience').textContent = response.base_experience;
    const lst = card2.querySelector('#abilities');
    const abilities = response.abilities;
    for(let i of abilities){
        const li = document.createElement('li');
        li.textContent = i.ability.name;
        lst.append(li);
    }
}

const btn = document.getElementById('fight');
btn.addEventListener('click',()=>{
    displayDetailsOfPokemon();
    setTimeout(()=>{
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById('card2');
    let src1 = card1.querySelector('#experience').textContent;
    let src2 = card2.querySelector('#experience').textContent;
    scr1 = Number(src1);
    scr2 = Number(src2);
    console.log(src1,src2);
    if(src1>src2){
        score1 = score1 + 1;
        document.querySelector('#p1_score').textContent = `Score : ${score1}`;
    }
    else if(src2>src1)
    {
        score2 = score2 + 1;
        document.querySelector('#p2_score').textContent = `Score : ${score2}`;

    }
},1000);
});

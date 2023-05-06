let jokeP1 = document.querySelector('#joke-p1');
let jokeP2 = document.querySelector('#joke-p2');
let jokeDiv = document.querySelector('#joke-div');
let generate = document.querySelector('#generate');
let es = document.querySelector('#es');
let en = document.querySelector('#en');

let url = 'https://v2.jokeapi.dev/joke/Any?'

es.addEventListener('click', () => {
    url = 'https://v2.jokeapi.dev/joke/Any?lang=es';
    es.style.backgroundColor = 'navy';
    en.style.backgroundColor = 'inherit';
});

en.addEventListener('click', () => {
    url = 'https://v2.jokeapi.dev/joke/Any?';
    en.style.backgroundColor = 'navy';
    es.style.backgroundColor = 'inherit';
});

generate.addEventListener('click', () =>{
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            if(json.type == 'single')
                jokeP1.innerHTML = `- ${JSON.stringify(json.joke)}`;
            else{
                jokeP1.innerHTML = `- ${JSON.stringify(json.setup)}`;
                jokeP2.innerHTML = `+ ${JSON.stringify(json.delivery)}`;
            }
            jokeDiv.style.display = 'block';
        })
        .catch(err => {
            console.log("Error!", err);
            jokeP1.innerHTML = `${err}`;
        })
        .finally(() => jokeDiv.style.display = 'block');
})
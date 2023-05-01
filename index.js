let jokeP1 = document.querySelector('#joke-p1');
let jokeP2 = document.querySelector('#joke-p2');
let generate = document.querySelector('#generate');
let es = document.querySelector('#es');
let en = document.querySelector('#en');

let url = 'https://v2.jokeapi.dev/joke/Any?'

es.addEventListener('click', () => {
    url = 'https://v2.jokeapi.dev/joke/Any?lang=es';
});

en.addEventListener('click', () => {
    url = 'https://v2.jokeapi.dev/joke/Any?';
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
        })
        .catch(err => {
            console.log("Error!", err);
            jokeP1.innerHTML = `${err}`;
        });
})
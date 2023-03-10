const fetch = require('node-fetch');
const { reject } = require('cypress/types/bluebird');
const fs = require('fs');


//*****************************CALLBACKS****************************** */
//Settimeout callbacks
// Dette er en asynkron funktion eftersom den venter 1 sekunder callback, før den kalde console.log
setTimeout(() => {
    console.log("Waited one second");
}, 1000)


// Et andet eksempel er også med en button callback
/*
let btn;
btn.addEventlistener('Click', () => {
    console.log("cliced");
})
*/

//Error
// Hva så hvis dit callback fejler?
// den her læser en fil, og har 2 parametre, første hvis den fejler anden er hvis den udskriver dataen

//NEDENSTÅENDE ER VIGTIG NÅR MAN ARBEJDER MED ASYNKRON PROGRAMMERING, FEJLHÅNDTERING.
fs.readFile('./test.txt', {encoding: 'utf-8'}, (err, data) => {
// Typisk best practice er en if med err, så vi har en kontrolstuktur der tjekker det.
    if(err){
        // Bliver kastet såfremt en error opstod.
        console.error('ERROR');
        console.error(err);
    }else{
        // Bliver smidt ud hvis den ikke fejler og får læst teksten
        console.log('GOT DATA');
        console.log(data);
    }

});

//*****************************PROMISES****************************** */
// Promises har altid en succes path (resolve) og en failed path (reject);
const promise = new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 2);

    if(rand === 0){
        resolve();
    }else{
        reject();
    }

});

// Eftersom vi har et promise kan vi kalde .then funktionen som tager en callback funktion

// Første del er hvad der sker hvis det lykkedes, for at fange hvis den fejler bruges .catch
promise
    .then(() => console.log("Success"))
    .catch(() => console.error("Something went wrong"));

// Vi kan så gøre det samme med fs som har en tilkoblet promies funktion
fs.promises.readFile('./test.txt', {encoding: 'utf-8'})
    .then(data => console.log(data))
    .catch(err => console.error(err))


//***********************************AWAIT ASYNC************************************ */

// Når vi har en asynkron funktion kan vi bruge await keyword, vi slipper her for at lave .then til at håndtere resultatet.
const loadfile = async () => {
    try {
        const data = await fs.promises.loadfile('./test.txt', {encoding: 'utf-8'})    
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    
}

loadfile();

const fetchPoke = async (id) => {
    // Altid have trycatch omkring for at håndtere i tilfælde af at vores promise ikke bliver resolved og fejler så vi kan få fejlbeskeden ud.
    try {
        // Når vi fetcher fra en api, får vi det ud i Json format.
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        // .json er også et promise derfor vi også skal bruge keywordet await.
        const data = await res.json();
        // Som vi så til sidst kan skrive ud til konsollen
        console.log(data);

    } catch (error) {
        console.error(error);
    }
    
}
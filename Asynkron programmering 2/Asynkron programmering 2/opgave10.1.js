// opgave11.1.js
//const userUrl = 'https://jsonplaceholder.typicode.com/users';
const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function start(){
    try {
        let data = await get(userUrl);
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

start();
// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(id){
    const respons = await fetch(postUrl + id);
    if(respons.status !== 200){
        console.log("Error with post");
        throw new Error(respons.status);
    
    }
    return await respons.json();

}

async function listPersons(){
    try {
        let getData = await get(userUrl);
        let table = document.getElementById("myTable");
        getData.forEach((element) => {
            let row = table.insertRow();
            let firstname = row.insertCell(0);
            let username = row.insertCell(1);
            firstname.innerHTML = element.name;
            username.innerHTML = element.username;
            console.log(element.id);
            row.onclick = async function(){
                showCase(element.id);
            }
            
        });
        
    } catch (err) {
        console.error(err);
    }
}


async function showCase(id){
    try {
        let getPosts = await post(id);
        let table = document.getElementById("showcase");
        
        getPosts.forEach((element) =>{
            let row = table.insertRow();
            let cell = row.insertCell(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);
            cell.innerHTML = element.userId;
            cell1.innerHTML = element.id;
            cell2.innerHTML = element.title;

        
        })
        
    } catch (error) {
        console.error(error);
    }
}
listPersons();
//showCase();
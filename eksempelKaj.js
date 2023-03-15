
// Måder at lave async programmering
// 1 Callbacks
// 2 promises
// 3 async/await



let promise = new Promise((resolve,reject) => {
    resolve("Promises are meant to be broken");
});

// Bliver ingenting eftersom der ikke er en .then()
console.log(promise);

// Her gør vi noget
promise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
});

// Med flere

let promise1 = new Promise((resolve, reject) = {
    resolve
})
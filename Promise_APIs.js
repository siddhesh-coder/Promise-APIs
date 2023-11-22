//Promises
const p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("P1 🏆");
    },6000);

    //failling case

    // setTimeout(()=>{
    //     reject("P1 🎃");
    // },1000);
});

const p2 = new Promise((resolve,reject) => {
    // setTimeout(()=>{
    //     resolve("P2 🏆");
    // },1000);

    //failling case

    setTimeout(()=>{
        reject("P2 🎃");
    },3000);
});

const p3 = new Promise((resolve,reject) => {
    // setTimeout(()=>{
    //     resolve("P3 🏆");
    // },2000);

    //failling case

    setTimeout(()=>{
        reject("P3 🎃");
    },2000);

});

Promise.all([p1,p2,p3])  //.all
.then((res) => {
    console.log(res);
})
.catch((err) => {
    //console.error(err);
    console.log(err.errors);
});

// Promise.allSettled([p1,p2,p3])  //.allsetteled
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
// });

// Promise.race([p1,p2,p3])  //.race
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
// });

// Promise.any([p1,p2,p3])  //.any
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(err);
//     console.log(err.errors);
// });

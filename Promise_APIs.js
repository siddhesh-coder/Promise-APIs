//Promises
const p1 = ()=>{
    return new Promise((resolve,reject) => {
    // setTimeout(()=>{
    //     resolve("P1 🏆");
    // },3000);

    //failling case

    setTimeout(()=>{
        reject("P1 🎃");
    },1000);
});
}
const p2 = ()=>{
    return new Promise((resolve,reject) => {
    // setTimeout(()=>{
    //     resolve("P2 🏆");
    // },5000);

    //failling case

    setTimeout(()=>{
        reject("P2 🎃");
    },3000);
});
}
const p3 = ()=>{
    return new Promise((resolve,reject) => {
    // setTimeout(()=>{
    //     resolve("P3 🏆");
    // },2000);

    //failling case

    setTimeout(()=>{
        reject("P3 🎃");
    },1000);

});
}

// Promise.all([p1,p2,p3])  //.all
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     //console.error(err);
//     console.log(err.errors);
// });

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


//Building polyfills of Promise APIs

//Promise.all  [API]

// const promiseALL = function(functions){
//     let result = new Array(functions.length);
//     let count = 0;
//     return new Promise((resolve,reject) => {
//         functions.forEach((fn, index) => {
//             fn()
//             .then((res) => {
//                 result[index] = res; 
//                 count++; 
//                 if(count === functions.length) resolve(result);
//             })
//             .catch(err => reject(err));
//         });
//     });
// };

//Promise.allSettled  [API]

// const promiseAllSettled = function(functions){
//     return new Promise((resolve,reject) => {
//        const result = new Array(functions.length);
//        let count = 0;

//        functions.forEach((fn , index) => {
//           fn()
//           .then((res) =>  result[i] = { status: 'fulfilled', value: res };)
//           .catch((err) => result[i] = { status: 'rejected', reason: err };)
//           .finally(()=> {count++; if(count === functions.length) resolve(result)})
//        });
//     });
// };

//Promise.race  [API]

// const promiseRace = function(functions){
//     return new Promise((resolve,reject) => {
//        let settled = false;
//        functions.forEach((fn , index) => {
//           fn()
//           .then((res) => {
//             if(!settled){
//                 settled = true;
//                 resolve(res);
//             }
//           })
//           .catch((err) => {
//               if(!settled){
//                 settled = true;
//                 reject(res);
//               } 
//           })
//        });
//     });
// };

//Promise.any  [API]

const promiseRace = function(functions){
    return new Promise((resolve,reject) => {
        
        if (functions.length === 0) {
            reject(new AggregateError('No promises in array'));
            return;
          }

        let fulfilled = false;
        let count = 0;

       functions.forEach((fn , index) => {
          fn()
          .then((res) => {
            if(!fulfilled){
                fulfilled = true
                resolve(res);
            }
          })
          .catch((err) => {
            count++;
              if(count === functions.length){
                reject(new AggregateError("All promises were rejected"));
              }
          })
       });
    });
};

promiseRace([p1,p2,p3]).then(res => console.log(res)).catch(err => {console.error(err);});

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});

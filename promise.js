// --------схоже на задачу в ДЗ----------
// const makePromise = () => {
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
//         if (passed) {
//             resolve('OK. thats resolve');
//         }
//         reject('Bad! Thats reject');
//     } );
// };
// makePromise()
//     .then(result => console.log(result))
//     .catch(reject => console.log(reject));

// --------example fetch-------
const mockFetchUsers = () => new Promise((resolve, reject) => {
    const users = [
        { id: 1, name: 'Bobby', age: 15 },
        { id: 2, name: 'Peter', age: 18 },
        { id: 3, name: 'Chris', age: 20 },
    ];
    setTimeout(() => {
        resolve(users);
    }, 2000);
});
mockFetchUsers().then((data) => {
    console.log(data);
});

// --------банк рахунок-------
const mockFetchAccounts = () => new Promise((resolve, reject) => {
    const accounts = [
        { id: 10, number: 121212, amount: 10000, userId: 3 },
        { id: 20, number: 121213, amount: 20000, userId: 1 },
        { id: 30, number: 121214, amount: 30000, userId: 2 },
    ];
    setTimeout(() => {
        resolve(accounts);
    }, 2000);
});
// -----wait 4 sec------
// mockFetchUsers().then((data) => {
//     console.table(data);
// })
//     .then(mockFetchAccounts)
//     .then((data) => {
//     console.table(data);
//     });

// -----wait 2 sec------
Promise.all([mockFetchUsers(), mockFetchAccounts()])
    .then(([users, accounts]) => {
        console.table(users);
        console.table(accounts);
    },
    );

// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;

//     setTimeout(() => {
//         if (canFulfill) {
//             resolve('Проміс виконався успішно');
//         }
//         reject('Проміс виконався з помилкою');
//     }, 2000);
// });
// // promise.then(result => {
// //     console.log(result);
// // },
// //     error => {
// //        console.log(error);
// //     },
// // );

// // ------2 спосіб функціями-----
// promise.then(onFulfilled, onRejected);
// function onFulfilled(result) {
//     console.log(result);
// }
// function onRejected(error) {
//     console.log(error);
// }

// --------Промісифікація функцій------
const makeOrder = dish => {
    const DELAY = 1000;
    const promise = new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;
        setTimeout(() => {
            if (passed) {
                resolve('Ось ваша страва');
            }
            reject('Вибачте, немає в наявності');
        }, DELAY);
    });
    return promise;
};

const p = makeOrder('перша страва');
p.then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(result) {
    console.log('onMakeOrderSuccess');
    console.log(result);
}
function onMakeOrderError(error) {
    console.log('onMakeOrderError');
    console.log(error);
}
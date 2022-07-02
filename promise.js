// --------схоже на задачу в ДЗ----------
const makePromise = () => {
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;
        if (passed) {
            resolve('OK. thats resolve');
        }
        reject('Bad! Thats reject');
    } );
};
makePromise()
    .then(result => console.log(result))
    .catch(reject => console.log(reject));
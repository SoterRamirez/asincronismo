const fnAsync = async () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async done!'), 2000)
            : reject(new Error('Async failed!'));
    })
}

const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('Finished!');
}

console.log('Before');
anotherFn();
console.log('After');
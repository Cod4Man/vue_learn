// 原始写法，需要new Promise作为返回值
new Promise((resolve, reject) => {
    console.log('data1 log')
    setTimeout(() => {
        resolve('first data')
        // reject('err')
    }, 1000)
}).then(data => {
    let data2 = data + ' 02'
    console.log('data2 log', data2)
    return new Promise(resolve => {
       resolve(data2)
    })
}).then(data => {
    let data3 = data + ' 03';
    console.log('data3 log', data3);
}).catch(err => {
    console.log(err);
})


// 进阶写法，需要Promise.resolve(作为返回值
new Promise((resolve, reject) => {
    console.log('data1 log')
    setTimeout(() => {
        resolve('first data')
        // reject('err')
    }, 1000)
}).then(data => {
    let data2 = data + ' 02'
    console.log('data2 log', data2)
    return Promise.resolve(data2)
}).then(data => {
    let data3 = data + ' 03';
    console.log('data3 log', data3);
}).catch(err => {
    console.log(err);
})


// 终极写法，直接return data，默认调用resolve
new Promise((resolve, reject) => {
    console.log('data1 log')
    setTimeout(() => {
        resolve('first data')
        // reject('err')
    }, 1000)
}).then(data => {
    let data2 = data + ' 02'
    console.log('data2 log', data2)
    return data2
}).then(data => {
    let data3 = data + ' 03';
    console.log('data3 log', data3);
}).catch(err => {
    console.log(err);
})


// reject会终端链式调用，类似于抛出了异常，后续不会再执行。
// 因此，也可不使用reject返回，而是直接throw异常
new Promise((resolve, reject) => {
    console.log('data1 log')
    setTimeout(() => {
        reject('err')

    }, 1000)
}).then(data => {
    let data2 = data + ' 02'
    console.log('data2 log', data2)
    // throw 'throw error msg'
    // return data2
}).then(data => {
    let data3 = data + ' 03';
    console.log('data3 log', data3);
}).catch(err => {
    console.log(err);
})
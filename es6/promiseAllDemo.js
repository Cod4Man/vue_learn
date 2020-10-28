Promise.all([
    new Promise((res, rej) => {
        setTimeout(() => {
            res('request 1\'s result')
        }, 1000)
    }),
    new Promise((res, rej) => {
        res('request 2\'s result')
    }, 600)
]).then(results => {
    console.log(results);
})
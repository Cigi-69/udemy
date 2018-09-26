// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('This is my callback error', 'The time is up - getDataCallback')
        callback('This is my callback error', 'The time is up - getDataCallback')
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my success data: ${data}`)
        // reject('This is my myPromise error')
        // reject('This is my myPromise error')
    }, 2000)
})

const myPromise = getDataPromise(123)

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})
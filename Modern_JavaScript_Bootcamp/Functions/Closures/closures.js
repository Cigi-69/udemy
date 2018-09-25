const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(-20))
const add100 = createAdder(100)
console.log(add100(-10))

// Tipper
console.log('Tipper')

const createTipper = (baseTip) => {
    return (bill) => {
        return baseTip * bill
    }
}

const tip10 = createTipper(.10)
console.log(tip10(100))
const tip15 = createTipper(.15)
console.log(tip15(100))
const tip25 = createTipper(.25)
console.log(tip25(100))
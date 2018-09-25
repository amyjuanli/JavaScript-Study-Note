Asyncrhonous iterator (compared to Synchronous Iterator)
```javascript
const timer = () => setInterval(()=>console.log('tick'), 500)

class SimpleAsyncIterable {
    constructor() {
        this.index = 0
        this.values = [3,1,4]
    }

    next() {
        const value = this.values[this.index]
        const done = !(this.index in this.values)
        this.index += 1
        return new Promise(
            resolve=>setTimeout(()=>resolve({ value, done }), 1000))
    }

    [Symbol.asyncIterator]() {
        return {
            next: () => this.next()
        }
    }   
}

const main = async () => {
    const t = timer()

    const iter = new SimpleAsyncIterable()
    for await (const value of iter) {
        console.log('value = ' + value)
    }

    clearInterval(t)    
}

main()
```

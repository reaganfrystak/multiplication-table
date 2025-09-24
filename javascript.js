
/*alert('adobe deleted my goddamn design file I worked all afternoon on')*/

console.log('Here\'s a for loop showing 1...10:\n')
    for (let i=0; i<10; i++) {
        console.log(`${i}\n'`)
    }


console.log('Here\'s a do-while loop showing 1...10:\n')
let i=0
do {
    console.log(i+'\n')
    i++
} while (i < 10)


console.log('Here\'s a while loop showing 1...10:\n')
let j=0
while (j < 10) {
    console.log(`${i}\n'`)
    j++
}


console.log('Here\'s a foreach loop iterating over an array showing 1...20:\n')
let nums=[...Array(20).keys()]
nums.forEach(num=> {
    console.log(`${ num }\n'`)
})


console.log('Here\'s a multiplication table method rendered in the console with a for loop:\n')
let timesTable = (to) => {
    console.log('Here\'s a times table to ' + to + '\n')
    for (let i = 1; i <= to; i++) {
        let row = ""
        for (let j = 1; j <= to; j++) {
            row += `${i * j}\t`
        }
        console.log(row)
    }
}

/* wtf did i just write */
timesTable(9)
timesTable(19)
timesTable(6)


let helloSomebody = (name) => {
    console.log(`My name is ${name}\n`)
}

helloSomebody('Reagan')
helloSomebody('Bob')

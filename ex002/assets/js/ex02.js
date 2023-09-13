const list1 = [1,3,5,7,9]
const list2 = []

console.log('list1 inteira',list1)

for(let i = 0; i <=4; i++) {
    let x = list1.pop()
    list2.push(x)
}
console.log('liat1 vazia',list1)
console.log('liata 2',list2)

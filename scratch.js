import hands from './src/index.js'

let json = [
  {
    bar: ['foo', 'baz'],
    waldo: 'fred',
  },
  {
    corge: 'grault',
  }
]

let id = '/0/bar/1'
let res = hands(id, json)
console.log(res)
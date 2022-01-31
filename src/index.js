import parse from './pointer.js'
import get from './get.js'


const view = function (pointer, data) {
  let ptr = parse(pointer)
  let res = get(ptr, data)
  return res
}
export default view
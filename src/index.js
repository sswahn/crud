import create from './core/create.js'
import read from './core/read.js'
import readOne from './core/readOne.js'
import update from './core/update.js'
import remove from './core/remove.js'

const dynamo = {
  create,
  read,
  readOne,
  update,
  remove
}

export default dynamo

function * generateId () {
  let id = 0

  while (true) {
    yield id++
  }
}

const getId = generateId()

export default getId

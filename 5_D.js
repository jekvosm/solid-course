// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLocalstorage = 'data from local storage'
    return dataFromLocalstorage
  }
}

class FetchClint {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request('vk.com')
  }
}

class LocalStorageClint {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet(key) {
    return this.localStorage.get(key)
  }
}

class Database {
  constructor(client) {
    this.client = client
  }

  getData(key) {
    return this.client.clientGet(key)
  }
}

const db = new Database(new LocalStorageClint())

console.log(db.getData('rand'))
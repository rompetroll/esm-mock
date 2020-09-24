import {loadDB} from './db.js'

export async function doSomething() {
    const loadedDb = await loadDB("app")
    const value = loadedDb.value;
    return `Hankey ${value}`
}

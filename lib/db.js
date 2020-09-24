const db = {
    "value": "Pankey"
}
export function loadDB(name) {
    return new Promise((resolve, reject) => {
        db.name = name;
        resolve(db)
    });
}

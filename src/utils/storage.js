export function setItem(key,value) {
    localStorage.setItem(key, JSON.stringify(value));

}

export function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function getRdmItem(key){
    const array = getItem(key) || ['collaboration'];
    return array[Math.floor(Math.random()*array.length)];
}

export function deleteItem(key,value) {
    localStorage.removeItem(key, JSON.stringify(value));
}
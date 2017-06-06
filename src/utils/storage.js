export function setItem(key,value) {
    localStorage.setItem(key, JSON.stringify(value));

}

export function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function getRdmItem(key){
    const array = getItem(key);
    return array[Math.floor(Math.random()*array.length)];
}
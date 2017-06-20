export function setItem(key,value) {
    localStorage.setItem(key, JSON.stringify(value));

}
export function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function getRdmItem(key) {
    if (typeof key === 'string') {
        const array = getItem(key) || ['collaboration'];
        return array[Math.floor(Math.random() * array.length)] || 'collaboration';
    }else{
        const array = key || ['collaboration'];
        return array[Math.floor(Math.random() * array.length)] || 'collaboration';
    }
}
export function deleteItem(key,value) {
    localStorage.removeItem(key, JSON.stringify(value));
}
class CacheValue{
constructor(value, appeals) {value; appeals;}

}

class Cache{
    constructor() { this._map = new Map() }
    set (key, cValue)
    {
        this._map.set(key, cValue);
    }
}

export {Cache}
class Cache{
    constructor() { this._map = new Map(); this._stat = new Array(); }
    set (key, val, rep = 1)
    {
        if (rep <=0) console.log("Количество обращений должно быть положительным!");//Точно надо ;??
        else this._map.set(key, {'value':val, 'repeat':rep});
    }
    get (key)
    {
        if(!this._map.has(key)) return null;
        this._stat.push(`${key} - ${this._map.get(key).value} (${this._map.get(key).repeat})`);
        this._map.get(key).repeat -=1;
        const val = this._map.get(key).value
        if(this._map.get(key).repeat == 0) this._map.delete(key);
        return val;
    }
    rep (key) //private
    {
        return this._map.get(key).repeat;
    }
    statistic ()
    {
        let st = new String();
        this._stat.forEach(elem => st+= elem + "\n");
        return st;
    }
}

export {Cache}
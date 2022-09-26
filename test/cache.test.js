import {Cache} from "../src/cache";

test('1)null to unknown key', () => {
    const c= new Cache();
    expect(c.get("name")).toBeNull();
});

test('2)right value by key', () => {
    const c= new Cache();
    c.set("name","John",3);
    expect(c.get("name")).toEqual("John");//John; 3=>2
});

test('3)-1 repeat after get', () => {
    const c= new Cache();
    c.set("name","John",3);
    c.get("name"); //rep - private
    expect(c.rep("name")).toEqual(2);//3=>2
});

test('4)-2 repeat after 2 get', () => {
    const c= new Cache();
    c.set("name","John",3);
    c.get("name");//=>2
    c.get("name");//=>1
    expect(c.rep("name")).toEqual(1);//3=>2
});

test('5) delete, when repeat become 0 after 1 get', () => {
    const c= new Cache();
    c.set("name","John",1);
    c.get("name");//=>0 and delete
    expect(c.get("name")).toBeNull();//3=>2
});

test('6) delete, when repeat become 0 after 2 get', () => {
    const c= new Cache();
    c.set("name","John",2);
    c.get("name");//=>1
    c.get("name");//=>0 and delete
    expect(c.get("name")).toBeNull();//3=>2
});

test('7) avto set 1 repeat', () => {
    const c= new Cache();
    c.set("name","John");
    expect(c.rep("name")).toEqual(1);
});

test('8) delete, when repeat become 0 after 1 get (avto set repeat)', () => {
    const c= new Cache();
    c.set("name","John");
    c.get("name");//=>0 and delete
    expect(c.get("name")).toBeNull();//3=>2
});

test('9) not add negative repeat', () => {
    const c= new Cache();
    c.set("name","John",-3);
    expect(c.get("name")).toBeNull();
});

test('10) simple statistic', () => {
    const c= new Cache();
    c.set("name","John",3);
    c.get("name");
    expect(c.statistic()).toEqual("name - John (3)\n");
});

test('11) statistic unknown key', () => {
    const c= new Cache();
    c.set("name","John",3);
    c.get("name");
    c.get("age");
    expect(c.statistic()).toEqual("name - John (3)\n");
});

test('12) statistic 2 get', () => {
    const c= new Cache();
    c.set("name","John",3);
    c.get("name");
    c.get("name");
    expect(c.statistic()).toEqual("name - John (3)\n"+"name - John (2)\n");
});

test('13) statistic 2 different get', () => {
    const c= new Cache();
    c.set("name","John",3);
    c.get("name");
    c.set("age","12",6);
    c.get("age");
    expect(c.statistic()).toEqual("name - John (3)\n"+"age - 12 (6)\n");
});

test('14) statistic set get set', () => {
    const c= new Cache();
    c.set("name","John",3);
    c.get("name");
    c.set("age","12",6);
    expect(c.statistic()).toEqual("name - John (3)\n");
});

//статистика

//=================================================

//describe('unknown key', () => {
//    it('should returns null if cache has no this key', () => {
//   const c= new Cache();
//    expect(c.get("name")).toBeNull()
//    })
//})



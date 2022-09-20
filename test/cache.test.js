import {Cache} from "../src/cache";

test('it fails', () => {
    expect(false).toBe(true);
});

test('it pass', () => {
    expect(false).toBe(false);
});
//=================================================

describe('unknown key', () => {
    it('should returns null if cache has no this key', () => {
    c = new Cache();
    expect(c.get("name")).toBeNull()
    })
})
//одинаково
test('unknown key', () => {
    e  c = new Cache();
    expect(c.get("name")).toBeNull()
});


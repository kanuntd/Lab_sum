const minus = require('./minus');

test('2 - 1 เท่ากับ 1', () => {
    expect(minus(2,1)).toBe(1);
});

test('10 - 8 เท่ากับ 2', () => {
    expect(minus(10,8)).toBe(2);
});

test('58 - 50 เท่ากับ 8', () => {
    expect(minus(58,50)).toBe(8);
});

test('250 - 140 เท่ากับ 110', () => {
    expect(minus(250,140)).toBe(110);
});

test('453 - 129 เท่ากับ 324', () => {
    expect(minus(453,129)).toBe(324);
});
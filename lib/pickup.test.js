const moment = require('moment');
const getPickUpProjectId = require('./pickup');

test('大学祭開始前', () => {
    expect(getPickUpProjectId(moment("2020-10-30"))).toBe(1);
});

test('（8:00）', () => {
    expect(getPickUpProjectId(moment("2020-10-31 08:00"))).toBe(1);
});

test('（9:00）', () => {
    expect(getPickUpProjectId(moment("2020-10-31 09:00"))).toBe(1);
});

test('（10:00）', () => {
    expect(getPickUpProjectId(moment("2020-10-31 10:00"))).toBe(2);
});

test('（11:00）', () => {
    expect(getPickUpProjectId(moment("2020-10-31 11:00"))).toBe(2);
});

test('（2日目 8:00）', () => {
    expect(getPickUpProjectId(moment("2020-11-01 08:00"))).toBe(7);
});

test('（2日目 9:00）', () => {
    expect(getPickUpProjectId(moment("2020-11-01 09:00"))).toBe(7);
});

test('（2日目 10:00）', () => {
    expect(getPickUpProjectId(moment("2020-11-01 10:00"))).toBe(8);
});

test('（2日目 11:00）', () => {
    expect(getPickUpProjectId(moment("2020-11-01 11:00"))).toBe(8);
});

test('大学祭終了後', () => {
    expect(getPickUpProjectId(moment("2020-11-02"))).toBe(11);
});
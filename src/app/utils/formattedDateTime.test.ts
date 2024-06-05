import { formattedDateTime } from './formattedDateTime';

describe('formatTime function', () => {
  it('returns a formatted time', () => {
    const testDate = '2022-12-11T05:29:17.571Z';
    const expected = '11.12.2022, 07:29';
    const result = formattedDateTime(testDate);
    expect(result).toEqual(expected);
  });
  it('returns template data if error', () => {
    const testDate = null;
    const expected = '01.01.2000, 00:00';
    const result = formattedDateTime(testDate);
    expect(result).toEqual(expected);
  });
  it('returns template data if error', () => {
    const testDate = undefined;
    const expected = '01.01.2000, 00:00';
    const result = formattedDateTime(testDate);
    expect(result).toEqual(expected);
  });
  it('returns template data if error', () => {
    const testDate = 123456;
    const expected = '01.01.2000, 00:00';
    const result = formattedDateTime(testDate);
    expect(result).toEqual(expected);
  });
});

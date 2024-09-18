import { expect, describe, it } from 'vitest';
import { arrayObjectToURLParams, objectToUrlParams, arrayJoin } from './objects';

describe('arrayObjectToURLParams', () => {
  it('should convert an array of strings to URL params', () => {
    const data = ["province", "city"];
    const result = arrayObjectToURLParams(data);
    expect(result).to.equal('get[]=province&get[]=city');
  });

  it('should convert an object with select and filter keys to URL params', () => {
    const data = { select: ["card"], filter: ["[card][type]=2"] };
    const result = arrayObjectToURLParams(data);
    expect(result).to.equal('get[]=card&filter[card][type]=2');
  });
});

describe('objectToUrlParams', () => {
  it('should convert an object to URL params', () => {
    const obj = { key1: 'value1', key2: 'value2' };
    const result = objectToUrlParams(obj);
    expect(result).to.equal('key1=value1&key2=value2');
  });

});

describe('arrayJoin', () => {
  it('should join array items with the specified separator', () => {
    const arr = ['item1', 'item2', 'item3'];
    const separator = '-';
    const result = arrayJoin(arr, separator);
    expect(result).to.equal('item1-item2-item3');
  });

  it('should join array items with no separator by default', () => {
    const arr = ['item1', 'item2', 'item3'];
    const result = arrayJoin(arr);
    expect(result).to.equal('item1item2item3');
  });
});
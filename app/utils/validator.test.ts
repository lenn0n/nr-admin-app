import { isCallbackValid } from '../utils/validator';
import { describe, it, expect } from 'vitest';
describe('isCallbackValid', () => {
  it('should return true if the input is a function', () => {
    const callback = () => {
      // function body
    };

    const result = isCallbackValid(callback);

    expect(result).toBe(true);
  });

  it('should return false if the input is undefined', () => {
    const result = isCallbackValid(undefined);

    expect(result).toBe(false);
  });

  it('should return false if the input is not a function', () => {
    const input =  undefined;

    const result = isCallbackValid(input);

    expect(result).toBe(false);
  });
});
import { useDebounce } from './useDebounce';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react';

jest.useFakeTimers();

describe('test useDebounce huc', () => {
  it('should call the callback function after the specified delay', () => {
    const callback = jest.fn();
    const delay = 500;
    const { result } = renderHook(() => useDebounce(callback, delay));

    act(() => {
      result.current();
    });

    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(delay);
    expect(callback).toBeCalled();
  });

  it('should reset the timer if called again before the delay', () => {
    const callback = jest.fn();
    const delay = 500;
    const { result } = renderHook(() => useDebounce(callback, delay));

    act(() => {
      result.current();
      jest.advanceTimersByTime(delay - 100);
      result.current();
    });

    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(400);
    expect(callback).toHaveBeenCalled();
  });
  it('should pass arguments to the debounced callback', () => {
    const callback = jest.fn();
    const delay = 500;
    const { result } = renderHook(() => useDebounce(callback, delay));

    act(() => {
      result.current('arg1', 'arg2');
    });

    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
  });
});

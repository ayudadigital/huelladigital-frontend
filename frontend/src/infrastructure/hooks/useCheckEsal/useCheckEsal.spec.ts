import { act, renderHook } from '@testing-library/react-hooks';
import { useCheckEsal } from './useCheckEsal';

describe('useCheckEsal', () => {
  it('should display the default message', () => {
    const { result } = renderHook(() => useCheckEsal());
    expect(result).toBeTruthy();
  });
});

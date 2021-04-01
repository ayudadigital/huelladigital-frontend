import { act, renderHook } from '@testing-library/react-hooks';
import { useCheckEsalAndEmployee } from './useCheckEsalAndEmployee';

describe('checkEsalAndEmployee', () => {
  it('should display the default message', () => {
    const { result } = renderHook(() => useCheckEsalAndEmployee());
    expect(result).toBeTruthy();
  });
});

import { renderHook } from '@testing-library/react-hooks';
import { useCheckEmployee } from './useCheckEmployee';

describe('useCheckEmployee', () => {
  it('should display the default message', () => {
    const { result } = renderHook(() => useCheckEmployee());
    expect(result).toBeTruthy();
  });
});

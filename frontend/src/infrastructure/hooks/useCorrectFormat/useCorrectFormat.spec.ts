import { act, renderHook } from '@testing-library/react-hooks';
import { useCorrectFormat } from './useCorrectFormat';

describe('useCorrectFormat', () => {
  it('should display the default message', () => {
    const { result } = renderHook(() => useCorrectFormat());
    expect(result).toBeTruthy();
  });
});

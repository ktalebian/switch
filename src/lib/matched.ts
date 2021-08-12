import { Matched } from './switch';

/**
 * Helper method to return the result of a matched predictor
 *
 * @param value		the value to return
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function doReturn<R>(value: any): Matched<R, any> {
  return () => {
    return value;
  };
}

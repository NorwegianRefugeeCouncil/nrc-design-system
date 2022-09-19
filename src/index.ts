import * as NativeBase from 'native-base';
import * as Components from './components';

export const components = Object.assign({}, NativeBase, Components);
export { default as theme } from './themes';
export { default as tokens } from './tokens';

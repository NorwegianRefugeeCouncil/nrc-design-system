import * as NativeBase from 'native-base';
import * as Components from './components';

type ComponentsType = typeof NativeBase & typeof Components;

export const components: ComponentsType = { ...NativeBase, ...Components } as ComponentsType;

export { default as theme } from './themes';
export { default as tokens } from './tokens';

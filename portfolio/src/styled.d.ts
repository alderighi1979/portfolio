import 'styled-components';
import TemaLight from './themes/ligth';
import TemaDark from './themes/dark';

type TemaType = typeof TemaLight;
type TemaType = typeof TemaDark;

declare module 'styled-components' {
  export interface DefaultTheme extends TemaType {}
}

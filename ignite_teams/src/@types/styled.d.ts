import 'styled-components/native';
import { theme } from '../theme';

declare module 'styled-components/native' {
  /**criei um tema baseado no theme que criei */
  type ThemeType = typeof theme;
  /**extendi a interface criada com o styled-components  */
  export interface DefaultTheme extends ThemeType {}
}

/**
 * Depois daqui: atribui esta config no tsconfig:
 * 
 * "compilerOptions": {
    "types": [
      "@types/styled-components-react-native"
    ]
 */
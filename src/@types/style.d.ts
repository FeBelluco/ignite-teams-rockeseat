import 'styled-component/native';
import theme from '../theme';

declare module 'styled-components' {
    type ThemeType = typeof theme; // criando um tema a partir do coteudo do tema que eu importe

    export interface DefaultTheme extends ThemeType { }
}
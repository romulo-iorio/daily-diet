import "styled-components";
import theme from "../theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme {
    COLORS: {
      WHITE: string;
      GREEN: {
        LIGHT: string;
        MID: string;
        DARK: string;
      };
      RED: {
        LIGHT: string;
        MID: string;
        DARK: string;
      };
      GRAY: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
      };
    };
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    };
    FONT_SIZE: {
      XS: number;
      SM: number;
      MD: number;
      LG: number;
      XL: number;
      "2XL": number;
    };
  }
}

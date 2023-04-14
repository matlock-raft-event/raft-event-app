import { createGlobalStyle } from "styled-components";
import typography, { pxToRem } from "~/theme/typography";
import { IResponsiveValues } from "~/theme/theme";

export function responsiveFontSizes({ sm, md, lg }: IResponsiveValues) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg),
        },
    };
}

const Style = createGlobalStyle`
  body {
  }

  h1 {
    font-weight: ${typography.h1.fontWeight};
    line-height: ${typography.h1.lineHeight};
    font-size: ${typography.h1.fontSize};
    ${typography.h1.responsiveFontSizes && responsiveFontSizes(typography.h1.responsiveFontSizes)}
  }

  h2 {
    font-weight: ${typography.h2.fontWeight};
    line-height: ${typography.h2.lineHeight};
    font-size: ${typography.h2.fontSize};
    ${typography.h2.responsiveFontSizes && responsiveFontSizes(typography.h2.responsiveFontSizes)}
  }

  h3 {
    font-weight: ${typography.h3.fontWeight};
    line-height: ${typography.h3.lineHeight};
    font-size: ${typography.h3.fontSize};
    ${typography.h3.responsiveFontSizes && responsiveFontSizes(typography.h3.responsiveFontSizes)}
  }

  h4 {
    font-weight: ${typography.h4.fontWeight};
    line-height: ${typography.h4.lineHeight};
    font-size: ${typography.h4.fontSize};
    ${typography.h4.responsiveFontSizes && responsiveFontSizes(typography.h4.responsiveFontSizes)}
  }

  h5 {
    font-weight: ${typography.h5.fontWeight};
    line-height: ${typography.h5.lineHeight};
    font-size: ${typography.h5.fontSize};
    ${typography.h5.responsiveFontSizes && responsiveFontSizes(typography.h5.responsiveFontSizes)}
  }

  h6 {
    font-weight: ${typography.h6.fontWeight};
    line-height: ${typography.h6.lineHeight};
    font-size: ${typography.h6.fontSize};
    ${typography.h6.responsiveFontSizes && responsiveFontSizes(typography.h6.responsiveFontSizes)}
  }

  p {
    line-height: ${typography.p.lineHeight};
    font-size: ${typography.p.fontSize};
  }
  
  button {
    font-weight: ${typography.button.fontWeight};
    line-height: ${typography.button.lineHeight};
    font-size: ${typography.button.fontSize};
    text-transform: ${typography.button.textTransform};
  }
`;

const GlobalStyleBaseline = () => {
    return <Style/>;
};

export default GlobalStyleBaseline;

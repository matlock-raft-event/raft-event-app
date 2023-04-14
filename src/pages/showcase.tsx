import * as React from "react";
import { ERROR, INFO, PRIMARY, SECONDARY, SUCCESS, WARNING } from "~/theme/palette";
import styled from "styled-components";
import shadows from "~/theme/shadows";
import { IPaletteVariants } from "~/theme/theme";

const ColorsGrid = styled.div`
  display: inline-grid;
  gap: 8px;
  grid-template-columns: repeat(5, 1fr);
  width: auto
`;

const ColorBox = styled.div`
  border-radius: 8px;
  box-shadow: ${shadows[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px
`;

const Showcase = () => {
    const themeColors = {
        Primary: PRIMARY,
        Secondary: SECONDARY
    };
    const statusColors = {
        Info: INFO,
        Warning: WARNING,
        Success: SUCCESS,
        Error: ERROR
    };

    const renderColorsGrid = (colors: Record<string, IPaletteVariants>) => {
        return Object.entries(colors).map(([name, variants], index) =>
            <div key={index}>
                <p>{name}</p>
                <ColorsGrid style={{ color: variants.contrastText }}>
                    <ColorBox style={{ background: variants.lighter }}>
                        <span>Lighter</span>
                        <span>{variants.lighter}</span>
                    </ColorBox>
                    <ColorBox style={{ background: variants.light, height: 100, width: 100 }}>
                        <span>Light</span>
                        <span>{variants.light}</span>
                    </ColorBox>
                    <ColorBox style={{ background: variants.main, height: 100, width: 100 }}>
                        <span>Main</span>
                        <span>{variants.main}</span>
                    </ColorBox>
                    <ColorBox style={{ background: variants.dark, height: 100, width: 100 }}>
                        <span>Dark</span>
                        <span>{variants.dark}</span>
                    </ColorBox>
                    <ColorBox style={{ background: variants.darker, height: 100, width: 100 }}>
                        <span>Darker</span>
                        <span>{variants.darker}</span>
                    </ColorBox>
                </ColorsGrid>
            </div>
        );
    };
    return (
        <>
            <h1>Typography</h1>

            <h1>h1. Heading</h1>
            <h2>h2. Heading</h2>
            <h3>h3. Heading</h3>
            <h4>h4. Heading</h4>
            <h5>h5. Heading</h5>
            <h6>h6. Heading</h6>
            <p>p: paragraph</p>

            <h1>Theme Colors</h1>
            {renderColorsGrid(themeColors)}

            <h1>Status Colors</h1>
            {renderColorsGrid(statusColors)}

            <h1>Button</h1>
            <button>hello world!</button>
        </>
    );
};

export default Showcase;

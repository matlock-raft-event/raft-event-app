import styled from "styled-components";
import { wcagContrastChecker } from "@mdhnpm/wcag-contrast-checker";
import { hex } from "wcag-contrast";
import shadows from "../../../theme/shadows";
import { IPalettePairing, IPaletteVariants } from "../../../theme/theme";
import Check from "../../assets/check-circle.svg";
import Cross from "../../assets/times-circle.svg";

export const Grid = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(5, 1fr);
  width: auto;
  margin-bottom: 16px !important;
`;

export const ColorBox = styled.div`
  border-radius: 8px;
  box-shadow: ${shadows[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-bottom: 8px !important;
`;

const RegularText = styled.div`
  font-size: 14px !important;
`;

const LargeText = styled.div`
  font-size: 24px !important;
`;

const Label = styled.p`
  margin: 0 !important;
`;

const Flexbox = styled.div`
  display: flex;
  align-items: center;
`;

const ContrastValues = ({ variant }: { variant: IPalettePairing }) => {
    const ratio = hex(variant.contrastText, variant.color)
        .toFixed(2);
    const {
        largeText,
        regularText
    } = wcagContrastChecker(variant.contrastText, variant.color);
    const renderIcon = (bool: boolean) => (
        bool ?
            <img alt="check" height={24} src={Check} /> :
            <img alt="cross" height={24} src={Cross} />
    );

    return (
        <>
            <Label>
                Contrast:
                {" "}
                {ratio}
            </Label>
            <Flexbox>
                <Label>Normal AA:</Label>
                {renderIcon(regularText.aa)}
            </Flexbox>
            <Flexbox>
                <Label>Normal AAA:</Label>
                {renderIcon(regularText.aaa)}
            </Flexbox>
            <Flexbox>
                <Label>Large AA:</Label>
                {renderIcon(largeText.aa)}
            </Flexbox>
            <Flexbox>
                <Label>Large AAA:</Label>
                {renderIcon(largeText.aaa)}
            </Flexbox>
        </>
    );
};

const ColorsGrid = ({ colors }: { colors: Record<string, IPaletteVariants> }) => Object.entries(colors)
    .map(([color, variants]) =>
        <div key={color}>
            <h4>{color}</h4>
            <Grid>
                {
                    Object.entries(variants)
                        .map(([name, variant]) =>
                            <div>
                                <ColorBox style={{
                                    background: variant.color,
                                    color: variant.contrastText
                                }}
                                >
                                    <RegularText>{name}</RegularText>
                                    <LargeText>{variant.color}</LargeText>
                                </ColorBox>
                                <ContrastValues variant={variant} />
                            </div>
                        )
                }
            </Grid>
        </div>
    );

export default ColorsGrid;

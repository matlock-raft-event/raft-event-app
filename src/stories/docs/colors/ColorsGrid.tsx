import { styled } from "@mui/material/styles";
import { PaletteColor } from "@mui/material/styles/createPalette";
import { hex } from "wcag-contrast";

import shadows from "~/theme/shadows";

import Check from "../../assets/check-circle.svg";
import Cross from "../../assets/times-circle.svg";

export const Grid = styled("div")`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 1fr);
  width: auto;
  margin-bottom: 16px !important;
`;

export const ColorBox = styled("div")`
  border-radius: 8px;
  box-shadow: ${shadows[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-bottom: 8px !important;
`;

const RegularText = styled("div")`
  font-size: 14px !important;
`;

const LargeText = styled("div")`
  font-size: 24px !important;
`;

const Label = styled("p")`
  margin: 0 !important;
`;

const Flexbox = styled("div")`
  display: flex;
  align-items: center;
`;

const ContrastValues = ({ variant }: { variant: PaletteColor }) => {
    const ratio = hex(variant.contrastText, variant.main);

    const normalAA = ratio > 4.5;
    const normalAAA = ratio > 7;
    const largeAA = ratio > 3;
    const largeAAA = ratio > 4.5;
    // SRC: https://webaim.org/resources/contrastchecker/
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
                {ratio.toFixed(2)}
            </Label>
            <Flexbox>
                <Label>Normal AA:</Label>
                {renderIcon(normalAA)}
            </Flexbox>
            <Flexbox>
                <Label>Normal AAA:</Label>
                {renderIcon(normalAAA)}
            </Flexbox>
            <Flexbox>
                <Label>Large AA:</Label>
                {renderIcon(largeAA)}
            </Flexbox>
            <Flexbox>
                <Label>Large AAA:</Label>
                {renderIcon(largeAAA)}
            </Flexbox>
        </>
    );
};

const ColorsGrid = ({ colors }: { colors: Record<string, PaletteColor> }) => Object.entries(colors)
    .map(([color, variant]) => (
        <Grid key={color}>
            <div>
                <ColorBox style={{
                    background: variant.light,
                    color: variant.contrastText
                }}
                >
                    <RegularText>{`Light: ${variant.light}`}</RegularText>
                </ColorBox>
            </div>

            <div>
                <ColorBox style={{
                    background: variant.main,
                    color: variant.contrastText
                }}
                >
                    <RegularText>{`Main: ${variant.main}`}</RegularText>
                    <LargeText>{`Text: ${variant.contrastText}`}</LargeText>
                </ColorBox>
                <ContrastValues variant={variant} />
            </div>

            <div>
                <ColorBox style={{
                    background: variant.dark,
                    color: variant.contrastText
                }}
                >
                    <RegularText>{`Dark: ${variant.dark}`}</RegularText>
                </ColorBox>
            </div>
        </Grid>
    ));

export default ColorsGrid;

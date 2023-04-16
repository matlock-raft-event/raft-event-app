import styled from "styled-components";
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
    const ratio = hex(variant.contrastText, variant.color);

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

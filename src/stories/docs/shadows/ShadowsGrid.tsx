import styled from "styled-components";

import shadows from "~/theme/shadows";

const FlexBox = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(${shadows.length}, 1fr);
  width: auto;
`;

const ShadowBox = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShadowsGrid = () => (
    <FlexBox>
        {
            shadows.map((shadow, index) =>
                <ShadowBox style={{ boxShadow: shadow }}>
                    <h1>{index}</h1>
                </ShadowBox>
            )
        }
    </FlexBox>
);

export default ShadowsGrid;

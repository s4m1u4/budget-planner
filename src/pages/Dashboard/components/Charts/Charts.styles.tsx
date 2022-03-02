import styled from "@emotion/styled";

export const ChartsList = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
});

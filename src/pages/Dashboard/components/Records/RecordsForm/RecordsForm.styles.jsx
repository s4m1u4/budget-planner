import styled from "@emotion/styled";

export const Title = styled.h3({
  fontSize: "22px",
  fontWeight: "500",
  margin: "0 0 15px 0",
});

export const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  rowGap: "15px",
});

export const ButtonGroup = styled.div({
  display: "grid",
  columnGap: "15px",
  gridTemplateColumns: "1fr 1fr",
});

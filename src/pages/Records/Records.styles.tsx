import styled from "@emotion/styled";

export const Wrapper = styled.div({
  padding: " 20px 0",
});

export const ProgressWrapper = styled.div({
  height: "45vh",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

export const RecordsTitle = styled.h1({
  marginBottom: "15px",
});

export const Grid = styled.div({
  gap: "20px",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  alignItems: "start",
});

export const Section = styled.div({
  borderRadius: "6px",
  border: "1px solid rgb(208, 215, 222)",
});

export const SectionHeader = styled.div({
  padding: "10px 15px",
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid rgb(208, 215, 222)",
});

export const SectionBody = styled.div({
  padding: "10px 15px",
});

export const SectionFooter = styled.div({
  padding: "10px 15px",
});

export const SectionTitle = styled.h3({
  fontSize: "22px",
  fontWeight: "500",
});

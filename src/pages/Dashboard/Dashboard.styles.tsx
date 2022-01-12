import styled from "@emotion/styled";

interface ISection {
  area: string;
}

export const Wrapper = styled.div({
  padding: "20px 0",
});

export const ProgressWrapper = styled.div({
  height: "45vh",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

export const DashboardTitle = styled.h1({
  marginBottom: "15px",
});

export const Grid = styled.div({
  gap: "20px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateAreas: `
    "overview records"
    "charts charts"
  `,
});

export const Section = styled.div((props: ISection) => ({
  gridArea: props.area,
  borderRadius: "6px",
  border: "1px solid rgb(208, 215, 222)",
}));

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

export const ChartsTitle = styled.h4({
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "10px",
});

export const Payment = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

export const PaymentTitle = styled.p({});

export const PaymentTotal = styled.span((props) => ({
  color:
    props.color === "income"
      ? "#2e7d32"
      : props.color === "expense"
      ? "#d32f2f"
      : "#000",
}));

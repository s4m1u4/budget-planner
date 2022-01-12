import styled from "@emotion/styled";

export const Payment = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 10px",
  borderRadius: "6px",
  border: "1px solid rgb(208, 215, 222)",
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

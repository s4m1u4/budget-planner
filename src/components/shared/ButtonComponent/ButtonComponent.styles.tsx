import styled from "@emotion/styled";

interface ButtonProps {
  color?: string;
  fullWidth?: boolean;
}

export const Button = styled.button((props: ButtonProps) => ({
  width: props.fullWidth ? "100%" : "",
  minWidth: "100px",
  fontFamily: "inherit",
  appearance: "none",
  border: "0",
  borderRadius: "5px",
  background:
    props.color === "primary"
      ? "#1976d2"
      : props.color === "secondary"
      ? "#9c27b0"
      : props.color === "error"
      ? "#d32f2f"
      : props.color === "warning"
      ? "#ed6c02"
      : props.color === "info"
      ? "#0288d1"
      : props.color === "success"
      ? "#2e7d32"
      : "#1976d2",
  color: "#fff",
  padding: "8px 16px",
  fontSize: "1rem",
  cursor: "pointer",
  "& > a": {
    color: "#fff",
  },
  "&:hover": {
    background:
      props.color === "primary"
        ? "#1565c0"
        : props.color === "secondary"
        ? "#7b1fa2"
        : props.color === "error"
        ? "#c62828"
        : props.color === "warning"
        ? "#e65100"
        : props.color === "info"
        ? "#01579b"
        : props.color === "success"
        ? "#1b5e20"
        : "#1565c0",
  },
  "&:active": {
    outline: "none",
    boxShadow:
      props.color === "primary"
        ? "0 0 0 4px rgba(66, 165, 245, 0.5)"
        : props.color === "secondary"
        ? "0 0 0 4px rgba(186, 104, 200, 0.5)"
        : props.color === "error"
        ? "0 0 0 4px rgba(239, 83, 80, 0.5)"
        : props.color === "warning"
        ? "0 0 0 4px rgba(255, 152, 0, 0.5)"
        : props.color === "info"
        ? "0 0 0 4px rgba(3, 169, 244, 0.5)"
        : props.color === "success"
        ? "0 0 0 4px rgba(76, 175, 80, 0.5)"
        : "0 0 0 4px rgba(66, 165, 245, 0.5)",
  },
  "&:disabled": {
    color: "#666666",
    background: "#cccccc",
    cursor: "not-allowed",
  },
}));

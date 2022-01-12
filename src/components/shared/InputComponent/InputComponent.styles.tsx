import styled from "@emotion/styled";

interface LabelProps {
  error: boolean;
}

interface InputProps {
  fullWidth?: boolean;
  error: boolean;
}

export const TextField = styled.div({
  marginBottom: "1rem",
});

export const Label = styled.label((props: LabelProps) => ({
  color: props.error ? "#dc3545" : "inherit",
  display: "block",
  marginBottom: "0.25rem",
}));

export const Input = styled.input((props: InputProps) => ({
  width: props.fullWidth ? "100%" : "inherit",
  display: "block",
  height: "calc(2.25rem + 2px)",
  padding: "0.375rem 0.75rem",
  fontFamily: "inherit",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "#212529",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: props.error ? "1px solid #dc3545" : "1px solid #bdbdbd",
  borderRadius: "0.25rem",
  transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  paddingRight: "2.25rem",
  backgroundImage: props.error
    ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"
    : "none",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.5625rem center",
  backgroundSize: "1.125rem 1.125rem",
  "&::placeholder": {
    color: "#212529",
    opacity: "0.4",
  },
  "&:focus": {
    color: "#212529",
    backgroundColor: "#fff",
    borderColor: props.error ? "#dc3545" : "#bdbdbd",
    outline: "0",
    boxShadow: props.error
      ? "0 0 0 0.25rem rgba(220, 53, 69, 0.25)"
      : "0 0 0 0.2rem rgba(158, 158, 158, 0.25)",
  },
  "&:disabled": {
    border: "none",
    color: "#666666",
    background: "#cccccc",
    cursor: "not-allowed",
  },
}));

export const Message = styled.div({
  marginTop: ".25rem",
  fontSize: ".875rem",
  color: "#dc3545",
});

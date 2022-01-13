import styled from "@emotion/styled";

export const Wrapper = styled.div({
  padding: " 20px 0",
});

export const Avatar = styled.div({
  marginBottom: "10px",
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  backgroundImage:
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEDRhK8UmJi2f3KBGti-__WjKErf1ahArGg&usqp=CAU)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

export const ProfileTitle = styled.h1({
  marginBottom: "15px",
});

export const ProgressBox = styled.div({
  display: "flex",
  justifyContent: "center",
  margin: "120px 0",
});

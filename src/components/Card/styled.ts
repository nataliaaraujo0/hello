import styled from "styled-components";

export const CardWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 16px;
width: 600px;
height: 400px;

 background: ${(props) => (props.background ? props.background : "#f7a7a4")};
 color: ${(props) => (props.color ? props.color : "#fff")};

 img{
  width: 580px;
  height: 300px;
 }
`;

import styled from "@emotion/styled";
import { Input as DefaultInput } from '@mui/material';
import { Send } from '@mui/icons-material';



export const Input = styled(DefaultInput)`
  color: ${(ctx)=>{
  // console.log("ctx mui", ctx);
    return "#ffff5f";
  }};
  padding: 20px 15px;
  font-size: 25px;
`;

export const SendIcon = styled(Send)`
  cursor: pointer;
  color: #ffffff;
`;



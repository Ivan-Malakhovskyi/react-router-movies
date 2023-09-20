import styled from 'styled-components';

export const LoaderWrapper = styled.div`
position: fixed;
top: 50%;
left: 30%;
transform: translate(-50%,-50%)
z-index: 998;
`;

export const ErrorMsg = styled.div`
  padding: 30px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33; /* 133.333% */
  letter-spacing: -0.36px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

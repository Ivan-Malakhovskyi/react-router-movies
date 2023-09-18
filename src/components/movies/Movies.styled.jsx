import styled from 'styled-components';

export const SectionSearchMovie = styled.section`
  padding: 30px 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 40px;
`;

export const Input = styled.input`
  display: flex;
  padding: 10px;
  background-color: transparent;
  border: none;
  border: 1px solid ${({ theme: { colors } }) => colors.borderListColor};
  border-radius: 4px;
  padding-left: 16px;
`;

export const BtnSearch = styled.button`
  color: ${({ theme: { colors } }) => colors.white};
  padding: 8px 16px;
  border-radius: 36px;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.borderListColor};
  line-height: 24px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

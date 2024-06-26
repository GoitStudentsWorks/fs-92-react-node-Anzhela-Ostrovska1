import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export const FooterBox = styled.footer`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primaryWhite};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: 52px;
  }
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.color.primaryBlack};
  font-size: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }
`;

export const FooterBtn = styled.button`
  color: ${({ theme }) => theme.color.primaryBlack};
  font-size: 12px;
  background-color: transparent;
  padding: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.primaryAccent};
  }
`;

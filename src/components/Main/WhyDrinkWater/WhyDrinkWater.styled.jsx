import styled from '@emotion/styled';
export const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`;
export const Item = styled.li`
  font-size: 16px;
  line-height: 20px;

  margin-bottom: 16px;
  position: relative;
  padding-left: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: ${({theme}) => theme.color.primaryAccent};
    border-radius: 50%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    /* list-style-position: inside; */
    list-style-position: outside;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
  margin: 0;
`;

export const Container = styled.div`
  display: inline-block;
  

  width: 280px;

  padding: 24px 16px;
  background-color: ${({theme}) => theme.color.secondaryWhite};
  box-shadow: ${({theme}) => theme.boxShadowforButton.hoverButton};
  border-radius: 10px;

  @media screen and (min-width: ${({ theme }) =>theme.breakpoint.tablet}) {
    padding: 32px 24px;
    width: auto;
    list-style-position: inside;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;
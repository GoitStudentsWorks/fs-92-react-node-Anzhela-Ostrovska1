import styled from '@emotion/styled';
export const Container = styled.div`
display: flex;
margin: auto;
flex-direction: column;
width: 280px;
gap: 40px;
padding: 0;

  @media only screen and (min-width: 768px) {
    margin: auto;
    gap: 60px;
    width: 704px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 30px;
    flex-direction: row;
    align-items: flex-end;
    gap: 81px;
    width: 1014px;

  }
`
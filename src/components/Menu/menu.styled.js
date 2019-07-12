import styled from 'styled-components';

export const StyleWrapper = styled.ul`
  background-image: ${({ icon }) => `url(${icon})`};
`;

export default styled;

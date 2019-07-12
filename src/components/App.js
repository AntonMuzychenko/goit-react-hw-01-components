import React from 'react';
import styled from 'styled-components';
import Menu from './Menu/Menu';
import products from './products.json';

const Container = styled.div`
  width: 500 px;
`;

const App = () => {
  return (
    <Container>
      <Menu
        products={products}
        icon="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj8jML16KzjAhVl_SoKHSwyDWgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.drive.ru%2Fnews%2F5bfeb8a6ec05c4b571000037.html&psig=AOvVaw0ANVTPYXbiTIH6CKdvcwVu&ust=1562932896297777"
      />
    </Container>
  );
};
export default App;

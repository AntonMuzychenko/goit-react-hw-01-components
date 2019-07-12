import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuList from '../MenuList/MenuList';

const StyleWrapper = styled.ul`
  background-image: ${({ icon }) => `url(${icon})`};
`;

// const style = {
//   border : "1px solid tomato"
// // }

const Menu = ({ products, icon }) => {
  return (
    <StyleWrapper icon={icon}>
      {products.length >= 3 ? (
        products.map(el => (
          <li key={el.id}>
            <MenuList {...el} />
          </li>
        ))
      ) : (
        <p>false</p>
      )}
    </StyleWrapper>
  );
};

Menu.Props = {
  products: [],
};

Menu.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
  icon: PropTypes.string.isRequired,
};

export default Menu;

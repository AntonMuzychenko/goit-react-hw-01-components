import React from 'react';
import PropTypes from 'prop-types';
import style from './MenuList.module.css';
// console.log(style);

const MenuList = ({ title, icon, price, disabled }) => {
  const choose = ['titleStyle'];

  if (!disabled) {
    choose.push('titleDisable');
  }

  // console.log({ id, title, icon, price });
  return (
    <div>
      <div>
        <h1 className={disabled ? style.titleStyle : style.titleDisable}>
          {title}
        </h1>
        <img className={style.imgStyle} src={icon} alt={title} />
        <p>{price}</p>
      </div>
    </div>
  );
};

MenuList.defaultProps = {
  disabled: false,
};

MenuList.propTypes = {
  price: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default MenuList;

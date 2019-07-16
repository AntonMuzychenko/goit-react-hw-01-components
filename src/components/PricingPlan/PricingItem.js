import React from 'react';
import PropTypes from 'prop-types';

const PricingItem = ({ label, icon, capacity, price, description, color }) => (
  <div>
    <i style={{ backgroundImage: `url(${icon})` }} />
    <h2 style={{ color }}>{label}</h2>
    <p>{capacity}</p>
    <p>{description}</p>
    <p>${price}</p>
    <button type="button" style={{ backgroundColor: color }}>
      Get started
    </button>
  </div>
);

PricingItem.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;

import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import styles from '../PricingPlan/PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={styles.plan}>
    {items.map(item => (
      <li key={item.id} className={styles.item}>
        <PricingItem
          label={item.label}
          icon={item.icon}
          capacity={item.capacity}
          price={item.price}
          description={item.description}
          color={item.color}
        />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default PricingPlan;

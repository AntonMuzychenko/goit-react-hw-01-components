import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

function randomColor() {
  const min = 40;
  const max = 240;
  const red = Math.round(Math.random() * (max - min) + min);
  const green = Math.round(Math.random() * (max - min) + min);
  const blue = Math.round(Math.random() * (max - min) + min);
  const color = `rgb(${red},${green},${blue})`;
  return color;
}

const Stats = ({ title, stats }) => (
  <section className={styles.stats}>
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map(el => (
          <li
            className={styles.item}
            key={el.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}> {el.label}</span>
            <span className={styles.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;

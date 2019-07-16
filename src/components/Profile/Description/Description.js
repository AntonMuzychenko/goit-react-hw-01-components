import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Profile.module.css';

const Description = ({ users }) => {
  return (
    <div className={styles.description}>
      <img src={users.avatar} alt="user avatar" className="avatar" />
      <p className={styles.name}>{users.name}</p>
      <p className={styles.tag}>{users.tag}</p>
      <p className={styles.location}>{users.location}</p>
    </div>
  );
};

Description.propTypes = {
  users: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Description;

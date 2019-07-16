import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description/Description';
import UserStats from './UserStats/UserStats';
import styles from './Profile.module.css';

const Profile = ({ users }) => {
  return (
    <div className={styles.profile}>
      <Description users={users} />
      <UserStats users={users} />
    </div>
  );
};

Profile.propTypes = {
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

export default Profile;

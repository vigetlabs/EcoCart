import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Typography } from '@material-ui/core';

// Styles
import styles from './styles/letter-grade.module.css';

const LetterGrade = ({ grade, cost }) => (
  <Typography>
    <span className={styles.cost}>{cost}</span>
    <span className={[styles.grade, styles[grade]].join(' ')}>{grade}</span>
  </Typography>
);

LetterGrade.propTypes = {
  grade: PropTypes.string.isRequired,
};

export default LetterGrade;

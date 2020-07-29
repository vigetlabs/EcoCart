import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  Box,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LetterGrade from '../../LetterGrade';

// Style
import styles from '../styles/alternative-options.module.css';

// Utils
import { getTotalImpactGrade, getGrade } from '../utils/calculations';

// Vars
const ALT = 'Alternatives';

const replaceItem = (cart, item, alternative) => {
  const tempCart = Object.keys(cart).reduce((obj, key) => {
    if (key === item) {
      return { ...obj, [key]: 0 };
    }
    if (key === alternative) {
      return { ...obj, [key]: cart[item] };
    }
    return { ...obj, [key]: cart[key] };
  }, {});

  return tempCart;
};

const getAltScore = (cart, item, alternative) => {
  const tempCart = replaceItem(cart, item, alternative);
  const newScore = getTotalImpactGrade(tempCart);

  return newScore;
};

const AlternativeOptions = ({ item, alternatives, cartState, head }) => {
  const [selected, setSelected] = useState(item);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const getMenuItems = (cart) => {
    const getMenuItem = (altItem) => {
      const altScore = getAltScore(cart, item, altItem);
      return (
        <MenuItem value={altItem}>
          {altItem} ({altScore})
        </MenuItem>
      );
    };
    return alternatives.map(getMenuItem);
  };

  if (head) {
    return (
      <Box className={styles.altOptionsBox}>
        <Grid container sm={12}>
          <Grid item sm={4}>
            <Typography variant="h5" className={styles.header}>
              High Impact Foods
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" className={styles.header}>
              Alternatives
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" className={styles.header}>
              Old Score -- Alt Score
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box className={styles.altOptionsBox}>
      <Grid container sm={12}>
        <Grid item sm={4}>
          <Typography variant="body1">{item}</Typography>
        </Grid>
        <Grid item sm={4}>
          {!alternatives || !alternatives.length ? (
            'No alternatives yet!'
          ) : (
            <Box>
              <InputLabel id="label">{ALT}</InputLabel>
              <Select
                labelId="label"
                id="select"
                value={selected}
                onChange={handleChange}>
                {getMenuItems(cartState)}
              </Select>
            </Box>
          )}
        </Grid>
        <Grid item sm={4}>
          <Box className={styles.scoresBox}>
            <Typography className={styles.score} variant="body1">
              {
                <LetterGrade
                  cost={getTotalImpactGrade(cartState)}
                  grade={getGrade(cartState)}
                />
              }
            </Typography>
            {selected === item ? null : (
              <>
                <ArrowForwardIcon fontSize="small" className={styles.arrow} />
                <Typography className={styles.score} variant="body1">
                  {
                    <LetterGrade
                      cost={getAltScore(cartState, item, selected)}
                      grade={getGrade(replaceItem(cartState, item, selected))}
                    />
                  }
                </Typography>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

AlternativeOptions.propTypes = {
  item: PropTypes.string,
  alternatives: PropTypes.arrayOf(PropTypes.string),
  cartState: PropTypes.objectOf(PropTypes.number),
};

export default AlternativeOptions;

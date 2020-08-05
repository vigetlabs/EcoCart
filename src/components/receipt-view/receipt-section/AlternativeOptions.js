import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import {
  Grid, Typography, Select, MenuItem, Box, InputLabel,
} from '@material-ui/core';
import LetterGrade from '../../LetterGrade';

// Style
import styles from '../styles/alternative-options.module.css';

// Utils
import { getTotalImpactGrade, getGrade } from '../utils/calculations';

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

const AlternativeOptions = ({
  item, alternatives, cartState, head,
}) => {
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
        <Box display={{ xs: 'none', md: 'flex' }}>
          <Grid container sm={12}>
            <Grid item sm={4}>
              <Typography variant="h5" className={styles.header}>
                High Impact Item
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h5" className={styles.header}>
                Alternatives
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h5" className={styles.header}>
                Alternative Score
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box display={{ xs: 'none', sm: 'flex', md: 'none' }}>
          <Grid container sm={12}>
            <Grid item sm={4}>
              <Typography variant="h5" className={styles.header}>
                Item
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h5" className={styles.header}>
                Alt Options
              </Typography>
            </Grid>
            <Grid item sm={4}>
              <Typography variant="h5" className={styles.header}>
                Alt Score
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={styles.altOptionsBox}>
      <Grid container sm={12}>
        <Grid item sm={4} xs={12}>
          <Typography variant="body1">{item}</Typography>
        </Grid>
        <Grid item sm={4} xs={6}>
          {!alternatives || !alternatives.length ? (
            'No alternatives yet!'
          ) : (
            <Box className={styles.dropdownContainer}>
              <InputLabel
                id="alts"
                className={styles.catLabel}
              >
                <label for="alts">Select Alternatives</label>
              </InputLabel>
              <Select
                label='alts'
                labelId="alts"
                id="alts"
                className={styles.dropdown}
                value={selected}
                onChange={handleChange}>
                {getMenuItems(cartState)}
              </Select>
            </Box>
          )}
        </Grid>
        <Grid item sm={4} xs={6}>
          <Box className={styles.scoresBox}>
            {selected === item ? null : (
              <Typography className={styles.score} variant="body1">
                <LetterGrade
                  cost={getAltScore(cartState, item, selected)}
                  grade={getGrade(replaceItem(cartState, item, selected))}
                />
              </Typography>
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

// import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import {
  Grid,
  Typography,
  Box,
  ClickAwayListener,
  Tooltip,
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LetterGrade from '../../LetterGrade';

// Styles
import styles from '../styles/item-grade.module.css';

// Data
import foodData from '../../../../content/food-data.json';

// Vars
const INFO_TEXT = `Eco points are numbers rated on a scale of 0 (bad)
                   to 100 (good) to measure a product’s impact. The adjacent
                   grade is derived from this score.`;

const ItemGrade = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const itemData = foodData[item];

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={8} lg={12} className={styles.labelBox}>
        <Typography variant="h3" className={styles.labelItem}>
          Eco Points:
        </Typography>
        <Box className={styles.labelItem} spacing={2}>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div
              onMouseLeave={handleTooltipClose}
              onMouseEnter={handleTooltipOpen}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableTouchListener
                arrow
                title={INFO_TEXT}>
                <InfoOutlinedIcon onClick={handleTooltipOpen} />
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Box>
      </Grid>
      <Grid xs={1}></Grid>
      <Grid item xs={4} lg={12}>
        <Box padding={1}>
          <LetterGrade
            cost={itemData.ecoScore.points}
            grade={itemData.ecoScore.grade}
            variant="h3"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

ItemGrade.propTypes = {};

ItemGrade.defaultProps = {};

export default ItemGrade;

import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import {
  Grid,
  Typography,
  Divider,
  Box,
  Tooltip,
  ClickAwayListener,
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ReceiptList from './ReceiptList';
import ImpactResult from './ImpactResult';

// Styles
import styles from '../styles/receipt-section.module.css';

// Variables
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const INFO_TEXT = `Numbers on the right are rated on a scale of 0 (bad)
                   to 100 (good) to measure a product’s impact. The adjacent
                   grade is derived from this score.`;

const ReceiptSection = ({ cartState }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const getDate = () => {
    const d = new Date();
    return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  return (
    <div className={styles.receiptSectionBox}>
      <Box className={styles.box}>
        <Grid container xs={12}>
          <Grid item xs={1} />
          <Grid
            container
            item
            xs={10}
            justify="space-around"
            className={styles.receiptBox}>
            <Grid item xs={1} />
            <Grid item xs={10} spacing={2} className={styles.receiptHeaderBox}>
              <Typography
                align="center"
                variant="h1"
                component="h1"
                gutterBottom>
                Impact Receipt
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <ClickAwayListener onClickAway={handleTooltipClose}>
                <div
                  onMouseEnter={handleTooltipOpen}
                  onMouseLeave={handleTooltipClose}>
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableTouchListener
                    arrow
                    title={INFO_TEXT}>
                    <InfoOutlinedIcon
                      onClick={handleTooltipOpen}
                      onHover={handleTooltipOpen}
                    />
                  </Tooltip>
                </div>
              </ClickAwayListener>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h5" gutterBottom>
                EcoCart - {getDate()}
              </Typography>
            </Grid>

            <Grid xs={12} item>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12} className={styles.receiptListBox}>
              <ReceiptList cartState={cartState} />
            </Grid>

            <Grid xs={12} item>
              <Divider variant="middle" />
            </Grid>

            <Grid item xs={12} className={styles.impactResultBox}>
              <ImpactResult cartState={cartState} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

ReceiptSection.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.number),
};

ReceiptSection.defaultProps = {};

export default ReceiptSection;

import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid, Typography, Divider } from '@material-ui/core';
import LetterGrade from '../../LetterGrade';

// Styles
import styles from '../styles/impact-result.module.css';

// Utils
import {
  getGrade,
  getTotalImpactGrade,
  getCartItems,
  getHighImpactItems,
} from '../utils/calculations';

// Vars
import IMPACT_RESPONSE_TEXT from '../utils/impact-reponse-text';

const getReceiptFooterText = (cartState) => {
  const hasHighImpactItem = getHighImpactItems(cartState).length > 0;
  const grade = getGrade(cartState);
  const property = !hasHighImpactItem && grade !== 'A' ? `${grade}_ALT` : grade;
  return IMPACT_RESPONSE_TEXT[property];
};

const ImpactResult = ({ cartState }) => (
  <Grid item container spacing={3} sm={12} className={styles.alternativesGrid}>
    <Grid item xs={6}>
      <Typography variant="h5" align="left">
        Total Impact
      </Typography>
    </Grid>

    <Grid item xs={6}>
      <Typography variant="h5" align="right">
        {getCartItems(cartState).length ? getTotalImpactGrade(cartState) : null}
      </Typography>
    </Grid>

    <Grid item xs={6}>
      <Typography variant="h5" align="left">
        Grade
      </Typography>
    </Grid>

    <Grid item xs={6}>
      <Typography variant="h5" align="right">
        {getCartItems(cartState).length ? (
          <LetterGrade grade={getGrade(cartState)} />
        ) : null}
      </Typography>
    </Grid>

    <Grid item xs={12}>
      <Divider />
    </Grid>

    <Grid item xs={12}>
      <Typography variant="p">{getReceiptFooterText(cartState)}</Typography>
    </Grid>
  </Grid>
);

ImpactResult.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.number),
};

ImpactResult.defaultProps = {};

export default ImpactResult;

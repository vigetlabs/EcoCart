// import PropTypes from 'prop-types';
import React from 'react';

// Components

// Styles
import { Grid, Typography, Divider } from '@material-ui/core';
import styles from '../styles/impact-result.module.css';

// Utils
import {
  getGrade,
  getTotalImpactGrade,
  getCartItems,
} from '../data-section/utils/calculations';

const ImpactResult = ({ cartState }) => (
  <Grid item container spacing={3} sm={12} className={styles.alternativesGrid}>
    <Grid item sm={6}>
      <Typography variant="h5" align="left">
        Total Impact
      </Typography>
    </Grid>

    <Grid item sm={6}>
      <Typography variant="h5" align="right">
        {getCartItems(cartState).length ? getTotalImpactGrade(cartState) : null}
      </Typography>
    </Grid>

    <Grid item sm={6}>
      <Typography variant="h5" align="left">
        Grade
      </Typography>
    </Grid>

    <Grid item sm={6}>
      <Typography variant="h5" align="right">
        {getCartItems(cartState).length ? getGrade(cartState) : null}
      </Typography>
    </Grid>

    <Grid item sm={12}>
      <Divider />
    </Grid>

    <Grid item sm={12}>
      <Typography variant="p">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum
      </Typography>
    </Grid>
  </Grid>
);

ImpactResult.propTypes = {};

ImpactResult.defaultProps = {};

export default ImpactResult;

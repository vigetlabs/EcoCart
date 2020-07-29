// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { Grid } from '@material-ui/core';
import DataBreakdown from './DataBreakdown';
import ImpactRadar from './ImpactRadar';
import ItemGrade from './ItemGrade';

// Styles
import styles from '../styles/data-section.module.css';

// Vars
const LAND = 'land';
const WATER = 'water';
const EUTRO = 'eutro';
const GHG = 'ghg';

const minRatio = { title: 0.2, body: 0.3 };

const DataSection = ({ item }) => (
  <Grid
    container
    justify="center"
  >
    <Grid
      item
      container
      className={styles.square}
      xs={12}
      spacing={2}
    >
      <Grid
        item
        container
        spacing={4}
        className={styles.square}
        xs={12}
        sm={12}
        md={12}
        lg={6}
      >
        <Grid
          item
          container
          justify='center'
          xs={12}
        >
          <ImpactRadar
            item={item}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <ItemGrade item={item} />
        </Grid>
      </Grid>
      <Grid
        item
        className={styles.breakdownBox}
        xs={12}
        sm={12}
        md={12}
        lg={6}
      >
        <DataBreakdown
          item={item}
          land={LAND}
          water={WATER}
          eutro={EUTRO}
          ghg={GHG}
          minRatio={minRatio}
        />
      </Grid>
    </Grid>
  </Grid>
);

DataSection.propTypes = {};

DataSection.defaultProps = {};

export default DataSection;

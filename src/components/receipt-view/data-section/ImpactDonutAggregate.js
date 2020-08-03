import PropTypes from 'prop-types';
import React from 'react';

// Components
import { VictoryPie } from 'victory';
import { Typography, Box } from '@material-ui/core';

// Style
import styles from '../styles/impact-donut-aggregate.module.css';

// Utils
import { getUsageImpact, getCartItems } from '../utils/calculations';

const scale = 0.7;

const ImpactDonutAggregate = ({
  cartState,
  size,
  colors,
  land,
  water,
  eutro,
  ghg,
}) => (
  <div
    className={styles.container}
    style={{
      width: size * scale,
      height: size * scale,
    }}>
    {getCartItems(cartState).length ? (
      <div
        style={{
          width: size * scale,
          height: size * scale,
        }}>
        <svg className={styles.svg}>
          <VictoryPie
            data={[land, water, eutro, ghg].map((type) => ({
              x: ' ',
              y: getUsageImpact(cartState, type, true),
            }))}
            width={size * scale}
            height={size * scale}
            colorScale={[
              colors[land],
              colors[water],
              colors[eutro],
              colors[ghg],
            ]}
            standalone={false}
            padding={25}
          />
        </svg>
        <Box display={{ xs: 'flex', sm: 'none' }}>
          <Typography>Xs</Typography>
        </Box>
        <Box display={{ xs: 'none', sm: 'flex', md: 'none' }}>
          <Typography>sm</Typography>
        </Box>
        <Box display={{ xs: 'none', md: 'flex', lg: 'none' }}>
          <Typography>md</Typography>
        </Box>
        <Box display={{ xs: 'none', lg: 'flex', xl: 'none' }}>
          <Typography>lg</Typography>
        </Box>
      </div>
    ) : null}
  </div>
);

ImpactDonutAggregate.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.number),
  size: PropTypes.number,
};

export default ImpactDonutAggregate;

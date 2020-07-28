import PropTypes from 'prop-types';
import React from 'react';

// Components
import { VictoryPie } from 'victory';

// Style
import styles from '../styles/impact-donut-aggregate.module.css';

// Utils
import { getUsageImpact, getCartItems } from '../utils/calculations';

const scale = 0.5;

const ImpactDonutAggregate = ({
  cartState,
  windowDimensions,
  colors,
  land,
  water,
  eutro,
  ghg,
}) => (
  <div
    className={styles.container}
    style={{
      width: windowDimensions.min * scale,
      height: windowDimensions.min * scale,
    }}>
    {getCartItems(cartState).length ? (
      <div
        style={{
          width: windowDimensions.min * scale,
          height: windowDimensions.min * scale,
        }}>
        <svg className={styles.svg}>
          <VictoryPie
            data={[land, water, eutro, ghg].map((type) => ({
              x: ' ',
              y: getUsageImpact(cartState, type, true),
            }))}
            width={windowDimensions.min * scale}
            height={windowDimensions.min * scale}
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
      </div>
    ) : null}
  </div>
);

ImpactDonutAggregate.propTypes = {
  cartState: PropTypes.objectOf(PropTypes.number),
  windowDimensions: PropTypes.objectOf(PropTypes.number),
};

export default ImpactDonutAggregate;

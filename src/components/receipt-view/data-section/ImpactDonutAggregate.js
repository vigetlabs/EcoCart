import React from 'react';

// Components
import { VictoryPie } from 'victory';

// Style
import styles from '../styles/impact-donut-aggregate.module.css';

// Utils
import { getUsageImpact, getCartItems } from '../utils/calculations';

const LAND = 'land';
const WATER = 'water';
const EUTRO = 'eutro';
const GHG = 'ghg';

const ImpactDonutAggregate = ({ cartState, windowDimensions }) => {
  const scale = 0.5;

  return (
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
              data={[
                {
                  x: ' ',
                  y: getUsageImpact(cartState, LAND, true),
                },
                {
                  x: ' ',
                  y: getUsageImpact(cartState, WATER, true),
                },
                {
                  x: ' ',
                  y: getUsageImpact(cartState, EUTRO, true),
                },
                {
                  x: ' ',
                  y: getUsageImpact(cartState, GHG, true),
                },
              ]}
              width={windowDimensions.min * scale}
              height={windowDimensions.min * scale}
              colorScale={['blue', 'gold', 'salmon', 'green']}
              standalone={false}
              padding={25}
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default ImpactDonutAggregate;

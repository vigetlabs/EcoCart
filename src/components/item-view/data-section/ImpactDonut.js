// import PropTypes from 'prop-types';
import React from 'react';

// Components
import { VictoryPie, VictoryLabel } from 'victory';

// Styles
import styles from '../styles/impact-donut.module.css';

// Utils
import capitalize from '../../utils';

const getLand = (item) => {
  const value = item ? 120 : 100;
  return value;
};

const getWater = (item) => {
  const value = item ? 80 : 70;
  return value;
};

const getEutro = (item) => {
  const value = item ? 130 : 120;
  return value;
};

const getCarbon = (item) => {
  const value = item ? 40 : 30;
  return value;
};

const ImpactDonut = ({ item }) => (
  <div className={styles.container}>
    <svg width={250} height={250} className={styles.donut}>
      <VictoryPie
        data={[
          { x: ' ', y: getWater(item) },
          { x: ' ', y: getEutro(item) },
          { x: ' ', y: getCarbon(item) },
          { x: ' ', y: getLand(item) },
        ]}
        colorScale={['blue', 'gold', 'salmon', 'green']}
        standalone={false}
        height={250}
        width={250}
        padding={0}
        padAngle={1.5}
        innerRadius={90}
      />
      <VictoryLabel
        textAnchor="middle"
        x={125}
        y={125}
        text={capitalize(item)}
      />
    </svg>
  </div>
);

ImpactDonut.propTypes = {};

ImpactDonut.defaultProps = {};

export default ImpactDonut;

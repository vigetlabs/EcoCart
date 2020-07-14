// import PropTypes from 'prop-types';
import { VictoryPie, VictoryLabel } from 'victory';
import React from 'react';

// Components

// Styles
import styles from '../styles/impact-donut-aggregate.module.css';

const ImpactDonutAggregate = () => (
    <div
      className={styles.donut}
    >
      <svg viewBox="0 0 400 400">
        <VictoryPie
            standalone={false}
            width={400} height={400}
            data={[
              { x: 1, y: 120 },
              { x: 2, y: 150 },
              { x: 3, y: 75 },
              { x: 4, y: 40 },
            ]}
            innerRadius={68} labelRadius={100}
            style={{ labels: { fontSize: 20, fill: 'white' } }}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 20 }}
            x={200} y={200}
            text="Donut!"
          />
      </svg>
    </div>
);

ImpactDonutAggregate.propTypes = {
};

ImpactDonutAggregate.defaultProps = {
};

export default ImpactDonutAggregate;

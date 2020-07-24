// import PropTypes from 'prop-types';
import React from 'react';

// Components
import {
  VictoryChart,
  VictoryGroup,
  VictoryPolarAxis,
  VictoryLabel,
  VictoryArea,
  VictoryTheme,
} from 'victory';

// Styles
import styles from '../styles/impact-donut.module.css';

// Data
import foodData from '../../../../content/food-data.json';

// Vars
const LAND = 'Land';
const WATER = 'Water';
const EUTRO = 'Eutrophication';
const GHG = 'Carbon';

const ImpactDonut = ({ item }) => {
  const itemData = foodData[item];

  return (

      <div
        className={styles.chartBox}
      >
        <VictoryChart
          polar
          theme={VictoryTheme.material}
          domain={{ y: [0, 1] }}
          startAngle={45}
          endAngle={405}
          width={500}
        >
          <VictoryGroup
            colorScale={['green']}
            style={{ data: { fillOpacity: 0.4, strokeWidth: 2 } }}>
            <VictoryArea
              data={[
                {
                  x: LAND,
                  y: itemData.rescaled.land / 100,
                },
                {
                  x: WATER,
                  y: itemData.rescaled.water / 100,
                },
                {
                  x: EUTRO,
                  y: itemData.rescaled.eutro / 100,
                },
                {
                  x: GHG,
                  y: itemData.rescaled.ghg / 100,
                },
              ]}
            />
          </VictoryGroup>
          {['Land Use', 'Water Use', 'Eutrophication', 'Greenhouse Gas'].map(
            (key, i) => (
              <VictoryPolarAxis
                key={i}
                dependentAxis
                style={{
                  axisLabel: { padding: 25 },
                  axis: { stroke: 'none' },
                  grid: {
                    stroke: (tick) => {
                      if (tick.tickValue <= 0.3) {
                        return 'green';
                      } if (tick.tickValue <= 0.7) {
                        return 'orange';
                      }
                      return 'red';
                    },
                    strokeWidth: 0.2,
                    opacity: 0.7,
                  },
                  tickLabels: {
                    fill: 'black',
                    fontSize: '8px',
                  },
                }}
                tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
                labelPlacement="perpendicular"
                axisValue={i + 1}
                label={key}
                tickFormat={(t) => ((t * 10) % 2 === 0 && t !== 0 ? t * 100 : null)}
                tickValues={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
              />
            ),
          )}
          <VictoryPolarAxis
            labelPlacement="parallel"
            tickFormat={() => ''}
            style={{
              axis: { stroke: 'none' },
              grid: { stroke: 'grey', strokeWidth: 1, opacity: 0.5 },
            }}
          />
        </VictoryChart>
      </div>
  );
};

ImpactDonut.propTypes = {};

ImpactDonut.defaultProps = {};

export default ImpactDonut;

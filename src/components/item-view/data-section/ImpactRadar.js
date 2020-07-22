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

  console.log(`
  Impact Score: ${itemData.ecoScore.points}
  Impact Grade: ${itemData.ecoScore.grade}
  Land: ${itemData.rescaled.land}
  Carbon: ${itemData.rescaled.ghg}
  Water: ${itemData.rescaled.water}
  Eutrophication: ${itemData.rescaled.eutro}
  `);

  return (
  <div className={styles.donut}>
      <div>
        <VictoryChart
          polar
          theme={VictoryTheme.material}
          domain={{ y: [0, 1] }}
          startAngle={45}
          endAngle={405}>
          <VictoryGroup
            colorScale={['green']}
            style={{ data: { fillOpacity: 0.75, strokeWidth: 2 } }}>
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
                  axisLabel: { padding: 15 },
                  axis: { stroke: 'none' },
                  grid: { stroke: 'grey', strokeWidth: 0.1, opacity: 0.5 },
                  tickLabels: { fill: 'none' },
                }}
                tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
                labelPlacement="perpendicular"
                axisValue={i + 1}
                label={key}
                tickFormat={(t) => Math.ceil(t)}
                tickValues={[0, 1]}
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
  </div>
  );
};

ImpactDonut.propTypes = {};

ImpactDonut.defaultProps = {};

export default ImpactDonut;

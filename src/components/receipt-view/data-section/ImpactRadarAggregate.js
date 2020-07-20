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
import styles from '../styles/impact-radar-aggregate.module.css';

// Utils
import {
  getUsageImpact,
  getStandardizedImpactValue,
  getTotalImpactGrade,
  getSpecializedImpactValue,
  getMaximum,
  getGrade,
  getCartItems,
} from './utils/calculations';

const LAND = 'land';
const WATER = 'water';
const EUTRO = 'eutro';
const GHG = 'ghg';

const ImpactRadarAggregate = ({ cartState }) => (
  <div className={styles.donut}>
    {getCartItems(cartState).length ? (
      <div>
        <p>
          Standardized Impact Value: {getStandardizedImpactValue(cartState)}
        </p>
        <p>Total Impact Score: {getTotalImpactGrade(cartState)}</p>
        <p>Total Impact Grade: {getGrade(cartState)}</p>
        <p>Land:{JSON.stringify(getUsageImpact(cartState, LAND))}</p>
        <p>Carbon: {JSON.stringify(getUsageImpact(cartState, GHG))}</p>
        <p>Water: {JSON.stringify(getUsageImpact(cartState, WATER))}</p>
        <p>
          Eutrophication: {JSON.stringify(getUsageImpact(cartState, EUTRO))}
        </p>
        <p>Specialized Impact Value: {getSpecializedImpactValue(cartState)}</p>
        <p>Maxima: {getMaximum(cartState)}</p>
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
                  y:
                    getUsageImpact(cartState, LAND, true) /
                    getMaximum(cartState),
                },
                {
                  x: WATER,
                  y:
                    getUsageImpact(cartState, WATER, true) /
                    getMaximum(cartState),
                },
                {
                  x: EUTRO,
                  y:
                    getUsageImpact(cartState, EUTRO, true) /
                    getMaximum(cartState),
                },
                {
                  x: GHG,
                  y:
                    getUsageImpact(cartState, GHG, true) /
                    getMaximum(cartState),
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
                tickFormat={(t) => Math.ceil(t * getMaximum(cartState))}
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
    ) : (
      <div>Add something to your list to see your impact!</div>
    )}
  </div>
);

ImpactRadarAggregate.propTypes = {};

ImpactRadarAggregate.defaultProps = {};

export default ImpactRadarAggregate;

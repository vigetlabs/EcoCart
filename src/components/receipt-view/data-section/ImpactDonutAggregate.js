import React, { useState, useEffect } from 'react';

// Components
import { VictoryPie } from 'victory';

// Utils
import { getUsageImpact, getCartItems } from './utils/calculations';

const LAND = 'land';
const WATER = 'water';
const EUTRO = 'eutro';
const GHG = 'ghg';

const ImpactDonutAggregate = ({ cartState }) => {
  const [size, setSize] = useState(0);
  const scale = 0.7;

  useEffect(() => {
    const handleResize = () => {
      setSize(Math.min(window.innerHeight, window.innerWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {getCartItems(cartState).length ? (
        <div
          style={{
            width: size * scale,
            height: size * scale,
          }}>
          <svg style={{ width: '100%', height: '100%' }}>
            <VictoryPie
              data={[
                {
                  x: LAND,
                  y: getUsageImpact(cartState, LAND, true),
                },
                {
                  x: WATER,
                  y: getUsageImpact(cartState, WATER, true),
                },
                {
                  x: EUTRO,
                  y: getUsageImpact(cartState, EUTRO, true),
                },
                {
                  x: GHG,
                  y: getUsageImpact(cartState, GHG, true),
                },
              ]}
              width={size * scale}
              height={size * scale}
              colorScale={['blue', 'gold', 'salmon', 'green']}
              standalone={false}
              padding={100}
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default ImpactDonutAggregate;

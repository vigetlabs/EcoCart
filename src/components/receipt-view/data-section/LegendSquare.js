import React from 'react';

const LegendSquare = ({
  legendStyle,
  impactType,
  colorsArray,
  windowDimensions,
}) => (
  <div
    className={legendStyle}
    style={{
      backgroundColor: colorsArray[impactType],
      width: windowDimensions.min / 40,
    }}></div>
);

export default LegendSquare;

import React from 'react';

const LegendSquare = ({
  legendStyle,
  impactType,
  colorsArray,
  windowSizeValue,
}) => (
  <div
    className={legendStyle}
    style={{
      backgroundColor: colorsArray[impactType],
      width: windowSizeValue / 40,
    }}></div>
);

export default LegendSquare;

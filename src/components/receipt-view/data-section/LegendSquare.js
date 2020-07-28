import PropTypes from 'prop-types';
import React from 'react';

const LegendSquare = ({
  legendStyle,
  impactType,
  colors,
  windowDimensions,
}) => (
  <div
    className={legendStyle}
    style={{
      backgroundColor: colors[impactType],
      width: windowDimensions.min / 40,
    }}></div>
);

LegendSquare.propTypes = {
  legendStyle: PropTypes.object,
  impactType: PropTypes.string,
  colors: PropTypes.objectOf(PropTypes.string),
  windowDimensions: PropTypes.objectOf(PropTypes.number),
};

export default LegendSquare;

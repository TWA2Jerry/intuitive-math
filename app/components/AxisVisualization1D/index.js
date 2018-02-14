/*
 * AxisVisualization1D
 *
 * A visualization that shows a non-animated 1D axis, with the ability
 * to draw stuff within the visualization.
 */

import React from 'react';

import PropTypes from 'prop-types';

import { XAxis } from 'components/Axis';
import Visualization, { BlankableVisualization } from 'components/Visualization';

// Need to disable propTypes checking here as this is an HOC
// eslint-disable-next-line react/prop-types
const AxisVisualization1D = (VisualizationComponent) => ({ render, width = 320, height = 240 }) => (
  <VisualizationComponent width={width} height={height}>
    <XAxis />
    {render ? render() : null}
  </VisualizationComponent>
);

AxisVisualization1D.propTypes = {
  render: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

const AnimatedAxisVisualization1D = AxisVisualization1D(Visualization);
const BlankableAxisVisualization1D = AxisVisualization1D(BlankableVisualization);

const MaybeBlankableAxisVisualization1D = (props, context) => (
  <div>
    {context.withinAnimation ? (
      <AnimatedAxisVisualization1D {...props} />
     ) : (
       <BlankableAxisVisualization1D {...props} />
     )}
  </div>
);

export default MaybeBlankableAxisVisualization1D;
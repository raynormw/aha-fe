import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import 'styles/slider.css';

const marks = [
  {
    value: 3,
    label: '3',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 20,
    label: '20',
  },
];

function valuetext(value) {
  return `${value}`;
}

export const SliderMarks = (props) => {
  return (
    <Box>
      <Slider
        aria-label='Custom marks'
        defaultValue={props.defaultValue}
        value={props.value}
        getAriaValueText={valuetext}
        onChange={props.onChange}
        step={3}
        valueLabelDisplay='auto'
        marks={marks}
        min={3}
        max={21}
        size='medium'
        className="slider"
        componentsProps={{
          thumb: { className: 'thumb' },
          rail: { className: 'rail' },
          track: { className: 'track' },
          markLabel: { className: 'markLabel' },
          markLabelActive: { className: 'markLabelActive' },
        }}
      />
    </Box>
  );
}

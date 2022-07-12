import React from 'react';
import { useState } from 'react';

const Child1 = ({ value, childValue2 }) => {
  return (
    <div>
      <h3>Child1: {value}</h3>
      <h3>values from child2 {childValue2}</h3>
    </div>
  );
};

export default Child1;

//

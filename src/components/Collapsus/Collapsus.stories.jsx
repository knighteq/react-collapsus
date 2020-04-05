import React from 'react';
import { storiesOf } from '@storybook/react';
import Collapsus from './Collapsus';

storiesOf('Collapsus', module)
  .add('default', () => (
    <Collapsus 
      actionButtonText='Collapse'
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vitae eligendi maxime illo necessitatibus iure?'
    />
  ));
  
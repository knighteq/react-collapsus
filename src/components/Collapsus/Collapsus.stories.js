import React from 'react';
import { storiesOf } from '@storybook/react';
import Collapsus from './Collapsus';
import styled from 'styled-components';

const actionButtonComponent = styled.button`
  background: red;
  color: white;
  padding: 15px;
`;

storiesOf('Collapsus', module)
  .add('default', () => (
    <Collapsus
      actionButtonText='Collapse'
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vitae eligendi maxime illo necessitatibus iure?'
    />
  ))
  .add('with custom actionButtonComponent', () => (
    <Collapsus
      actionButtonComponent={actionButtonComponent}
      actionButtonText='Collapse'
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vitae eligendi maxime illo necessitatibus iure?'
    />
  ));
  
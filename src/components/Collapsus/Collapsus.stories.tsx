import React from 'react';
import { storiesOf } from '@storybook/react';
import Collapsus from './Collapsus';
import styled from 'styled-components';

const actionButtonComponent = styled.button`
  background: #f0f0f0;
  border-radius: 15px;
  color: #000000;
  padding: 15px;

  &:focus {
    border: 0;
    outline: none;
  }
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
      content={
        <div style={{ padding: "20px 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus, vitae eligendi maxime illo necessitatibus iure?'
        </div>
      }
    />
  ))
  .add('with diffrent transitionTime', () => (
    <Collapsus
      transitionTime={1000}
      actionButtonComponent={actionButtonComponent}
      actionButtonText='Collapse'
      content={
        <div style={{ padding: "20px 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus, vitae eligendi maxime illo necessitatibus iure?'
        </div>
      }
    />
  ))
  .add('crazy content', () => (
    <Collapsus
      transitionTime={1000}
      actionButtonComponent={actionButtonComponent}
      actionButtonText='Collapse'
      content={
        <div style={{ padding: "20px", fontSize: '32px', color: 'red' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus, vitae eligendi maxime illo necessitatibus iure?'
        </div>
      }
    />
  ));
  
# React-Collapsus

![Example](collapse.gif)

A Styled-Component based collapse package.


## Instalation

```
npm i react-collapsus
```

## Usage

```jsx
import { Collapsus } from 'react-collapsus';

<Collapsus 
  actionButtonText="Collapse"
  content="Content text" 
/>
```

## Props

### actionButtonComponent: React.ElementType

Here can be passed a styled-component with own styling.

### actionButtonText: string

Just the text in the action button.

### content: React.ReactNode

Collapsed content, it can be a node.

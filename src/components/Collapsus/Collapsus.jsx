import React, { useState, useEffect } from 'react';
import {
  Wrapper,
  ActionButton,
  CollapsibleWrapper
} from './Collapsus.styles';

const Collapsus = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [height, setHeight] = useState(0);

  console.log({collapsed, height});

  let collapsibleRef = React.createRef();

  useEffect(() => {
    if (collapsibleRef.current) {
      setHeight(collapsibleRef.current.clientHeight);
    } else {
      setHeight(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  return (
    <Wrapper>
      <ActionButton onClick={() => {
        if (collapsed) {
          setHeight(0);
        } else {
          return setCollapsed((collapsed) => !collapsed);
        } 

        return setTimeout(() => setCollapsed((collapsed) => !collapsed), 2000);
      }}>XXX</ActionButton>
      {
        collapsed ? (
          <CollapsibleWrapper height={height}>
            <div ref={collapsibleRef}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex consequuntur itaque. Minus, et iure?
            </div>
          </CollapsibleWrapper>
        ) : null
      }
    </Wrapper>
  );
}

export default Collapsus;

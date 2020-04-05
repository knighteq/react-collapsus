import React, { useState, useEffect } from 'react';

import {
  Wrapper,
  ActionButton,
  CollapsibleWrapper
} from './Collapsus.styles';

const Collapsus = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [height, setHeight] = useState(0);

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

        return setTimeout(() => setCollapsed((collapsed) => !collapsed), 300);
      }}>{props.actionButtonText}</ActionButton>
      {
        collapsed ? (
          <CollapsibleWrapper height={height}>
            <div ref={collapsibleRef}>
              {props.content}
            </div>
          </CollapsibleWrapper>
        ) : null
      }
    </Wrapper>
  );
}

export default Collapsus;

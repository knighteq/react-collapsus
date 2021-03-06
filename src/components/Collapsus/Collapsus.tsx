import React, { useState, useEffect, useRef } from 'react';

import {
  Wrapper,
  ActionButton,
  CollapsibleWrapper,
} from './Collapsus.styles';

interface CollapsusProps {
  actionButtonComponent?: React.ElementType,
  actionButtonText: string,
  content: React.ReactNode,
  transitionTime?: number
};

const Collapsus: React.FC<CollapsusProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [height, setHeight] = useState(0);

  let collapsibleRef = useRef<HTMLDivElement>(null);

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
      <ActionButton as={props.actionButtonComponent} onClick={() => {
        if (collapsed) {
          setHeight(0);
        } else {
          return setCollapsed((collapsed) => !collapsed);
        } 

        return setTimeout(() => setCollapsed((collapsed) => !collapsed), props.transitionTime);
      }}>{props.actionButtonText}</ActionButton>
      {
        collapsed ? (
          <CollapsibleWrapper
            height={height}
            transitionTime={props.transitionTime!}
          >
            <div ref={collapsibleRef}>
              {props.content}
            </div>
          </CollapsibleWrapper>
        ) : null
      }
    </Wrapper>
  );
}

Collapsus.defaultProps = {
  actionButtonComponent: ActionButton,
  transitionTime: 300
}

export default Collapsus;

import React, { useState, useEffect, useRef, ReactComponentElement } from 'react';
import PropTypes, { ReactNodeLike } from 'prop-types';

import {
  Wrapper,
  ActionButton,
  CollapsibleWrapper,
} from './Collapsus.styles';

interface CollapsusProps {
  actionButtonComponent: React.ElementType,
  actionButtonText: string,
  content: ReactNodeLike
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

Collapsus.defaultProps = {
  actionButtonComponent: ActionButton
}

export default Collapsus;

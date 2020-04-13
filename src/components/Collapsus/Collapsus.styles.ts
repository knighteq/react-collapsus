import styled, { css } from 'styled-components';

const Wrapper = styled.div``;

const ActionButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`;

const CollapsibleWrapper = styled.div<{ height: number }>`
  height: 0;
  overflow: hidden;
  transition: height 300ms;

  ${(props) => props.height && css`
    height: ${props.height}px;
  `}
`;

export {
 Wrapper,
 ActionButton,
 CollapsibleWrapper
};

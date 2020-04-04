import styled, { css } from 'styled-components';

const Wrapper = styled.div`

`;

const ActionButton = styled.div`

`;

const CollapsibleWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 2s;

  ${(props) => props.height && css`
    height: ${(props) => props.height}px;
  `}
`;

export {
 Wrapper,
 ActionButton,
 CollapsibleWrapper,
};

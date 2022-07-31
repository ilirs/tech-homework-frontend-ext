import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import closeIcon from 'assets/icons/close-icon.svg';

const StyledDrawer = styled.div`
  height: 100%;
  width: ${({ open }) => (open ? '100%' : '0')};
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: #ffff;
  overflow-x: hidden;
  transition: 0.5s;
`;

const StyledCloseDrawer = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const StyledDrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 10px;
`;

const StyledDrawerContainer = styled.div`
  padding: 20px;
`;

const Drawer = ({ children, isOpen, closeDrawer }) => {
  return (
    <StyledDrawer open={isOpen}>
      <StyledDrawerContainer>
        <StyledDrawerHeader>
          <StyledCloseDrawer onClick={() => closeDrawer()}>
            <img src={closeIcon} alt="close" />
          </StyledCloseDrawer>
        </StyledDrawerHeader>
        {children}
      </StyledDrawerContainer>
    </StyledDrawer>
  );
};

Drawer.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  closeDrawer: PropTypes.func,
};

export default Drawer;

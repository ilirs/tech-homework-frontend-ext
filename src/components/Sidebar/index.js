import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

import ResourceItem from 'components/ResourceItem';
import Drawer from 'components/Drawer';
import pois from 'data/pois.json';
import storeIcon from 'assets/icons/store-online.png';
import menuIcon from 'assets/icons/menu.svg';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: scroll;
  min-width: 350px;
`;

const StyledSidebarTitle = styled.div`
  font-size: 24px;
  min-height: 72px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const StyledSidebarContainer = styled.div`
  min-height: 72px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 24px;
  justify-content: space-between;
`;

const Sidebar = ({ title, setIsDrawerOpen, isDrawerOpen, zoomIntoStore }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const itemList = useMemo(
    () =>
      pois.map((p, index) => (
        <ResourceItem
          key={`item-${index}`}
          title={p.name}
          description={p.brand}
          imageUrl={storeIcon}
          size="md"
          onClick={() => zoomIntoStore(p)}
        />
      )),
    [zoomIntoStore]
  );
  return (
    <>
      <StyledSidebar>
        <StyledSidebarContainer>
          <StyledSidebarTitle>{title}</StyledSidebarTitle>
          {isTabletOrMobile && (
            <img
              src={menuIcon}
              width={24}
              height={24}
              onClick={() => setIsDrawerOpen(true)}
              alt="menu"
            />
          )}
        </StyledSidebarContainer>

        {!isTabletOrMobile && itemList}
      </StyledSidebar>

      <Drawer isOpen={isDrawerOpen} closeDrawer={() => setIsDrawerOpen(false)}>
        {itemList}
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string,
  openDrawer: PropTypes.func,
};

export default Sidebar;

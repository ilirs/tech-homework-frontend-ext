import React, { useState, useRef, useMemo } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { MAP_TOKEN } from 'config';
import pois from 'data/pois.json';
import pinIcon from 'assets/icons/location-pin.png';
import Sidebar from 'components/Sidebar';

const StyledHome = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.isTabletOrMobile ? 'column' : 'row')};
`;

const StyledPopUpContent = styled.div`
  padding: 10px;
`;

const StyledText = styled.div``;

const mapStyle = {
  width: '100%',
  minHeight: '100vh',
};

const Home = () => {
  const [popupInfo, setPopupInfo] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const refMap = useRef();

  const zoomIntoStore = (store) => {
    refMap.current.flyTo({
      center: [store.longitude, store.latitude],
      zoom: 15,
    });
    // Close drawer
    isTabletOrMobile && setIsDrawerOpen(false);
  };

  const pins = useMemo(
    () =>
      pois.map((p, index) => (
        <Marker
          key={`marker-${index}`}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(p);
          }}
          longitude={p.longitude}
          latitude={p.latitude}
          anchor="bottom"
        >
          <img src={pinIcon} alt="pin-icon" width="30" height="30" />
        </Marker>
      )),
    []
  );

  return (
    <StyledHome isTabletOrMobile={isTabletOrMobile}>
      <Sidebar
        title="Stores"
        zoomIntoStore={zoomIntoStore}
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
      <Map
        ref={refMap}
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
        }}
        style={mapStyle}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={MAP_TOKEN}
      >
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <StyledPopUpContent>
              <StyledText>{popupInfo.name}</StyledText>
              <StyledText>{popupInfo.address}</StyledText>
              <StyledText>{popupInfo.city}</StyledText>
            </StyledPopUpContent>
          </Popup>
        )}
      </Map>
    </StyledHome>
  );
};

export default Home;

import * as React from 'react';
import ReactMapGl from 'react-map-gl';

function PickLocation() {
    const [viewPort, setViewPort] = React.useState({
        latitude: 9.0423102,
        longtudude: -74.0060,
    })
  return (
    <ReactMapGl
      
    />
  );
}
export default PickLocation;
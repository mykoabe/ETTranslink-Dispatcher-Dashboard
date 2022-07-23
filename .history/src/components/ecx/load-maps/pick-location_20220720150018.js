import * as React from "react";
import ReactMapGl from "react-map-gl";

function PickLocation() {
  const [viewPort, setViewPort] = React.useState({
    latitude: 9.0423102,
    longtudude: 38.7678507,
    width: "100vw"
    zoom: 13,
  });
  return <ReactMapGl />;
}
export default PickLocation;

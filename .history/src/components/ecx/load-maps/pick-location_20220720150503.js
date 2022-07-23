import * as React from "react";
import ReactMapGl from "react-map-gl";
import { Container } from "@mui/material";

function PickLocation() {
  const [viewPort, setViewPort] = React.useState({
    latitude: 9.0423102,
    longtudude: 38.7678507,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });
  return (
    <Container>
      <ReactMapGl {...viewPort}>Markers here</ReactMapGl>;
    </Container>
  );
}
export default PickLocation;

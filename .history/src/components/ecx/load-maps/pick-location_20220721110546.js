const { Box } = require("@mui/material");
import GoogleMapReact from "google-map-react";

const PickLocation = ({ setCoordinates, coordinates }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBH2kdnqVC9oWJKW1ORrxQPeC_MO1OwiyI"" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={11}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        options={{}}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};
export default PickLocation;

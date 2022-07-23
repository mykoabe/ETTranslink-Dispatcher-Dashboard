const { Box } = require("@mui/material");
import GoogleMapReact from "google-map-react";

const PickLocation = ({ setCoordinates, coordinates }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        bgcolor: "red",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD-9tSrke72PouQMnMX-a7eZkvz0r1yjf8" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};
export default PickLocation;

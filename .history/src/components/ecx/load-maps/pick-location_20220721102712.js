const { Box } = require("@mui/material");
import googleMapReact from "google-map-react";

const PickLocation = () => {
  <Box
    sx={{
      width: "100%",
      height: "100%",
    }}
  >
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyD-9tSrke72PouQMnMX-a7eZkvz0r1yjf8" }}
      defaultCenter={{ lat: -1.2884, lng: 36.8233 }}
      
      defaultZoom={11}
      center
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
    ></GoogleMapReact>
  </Box>;
};
export default PickLocation;

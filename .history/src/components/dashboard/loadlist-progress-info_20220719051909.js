import { Paper, Box, Typography } from "@mui/material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { grey } from "@mui/material/colors";
const LoadListProgressInfo = () => {
  return (
    <Paper elevation={2} sx={{ width: "100%", mr: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 18,
              my: 3,
            }}
          >
            Todays LoadList Progress Info
          </Typography>
        </Box>

        <PublishedWithChangesIcon
          color="green"
          sx={{
            mt: 3,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 4,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          color: red[500],
        }}
      >
        <Typography>Customer Info</Typography>
        <Typography>Loading Date</Typography>
        <Typography>Progress</Typography>
      </Box>
    </Paper>
  );
};
export default LoadListProgressInfo;

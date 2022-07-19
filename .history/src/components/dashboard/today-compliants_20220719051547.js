import { Paper, Box, Typography } from "@material-ui/core";
import PublishedWithChangesIcon from "@mui/icons-material"
const TodayCompliants = () => {
  return (
    <Paper elevation={2} sx={{ height: "200px", width: "100%", mr: 4 }}>
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
              color: grey[500],
              mt: 3,
            }}
          >
            Customer Compliants
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              my: 3,
            }}
          >
            Today Compliants List
          </Typography>
        </Box>
        <PublishedWithChangesIcon
          color="green"
          sx={{
            mt: 3,
          }}
        />
      </Box>
    </Paper>
  );
};
export default TodayCompliants;

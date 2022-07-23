import { Box } from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import NewForm from "../../components/customer/new-form";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Typography, Button } from "@mui/material";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";

export const facilitatorData = [
    {
      id: "name",
      name: "name",
      type: "text",
      label: "Facilitator Name",
      autocomplete: "facilitator-name",
    },
    {
      id: "password",
      name: "password",
      type: "text",
      label: "Password",
      autocomplete: "password",
    },
    {
      id: "email",
      name: "email",
      type: "text",
      label: "Email Address",
      autocomplete: "email",
    },
    {
      id: "facilitator_photo",
      name: "facilitator_photo",
      type: "text",
      label: "Facilitator Photo",
      autocomplete: "facilitator-photo",
    },
    {
      id: "phone",
      name: "phone",
      type: "text",
      label: "Phone Number",
      autocomplete: "phone",
    },
    {
      id: "type",
      name: "typr",
      type: "text",
      label: "Fafilitator Type",
      autocomplete: "type",
    },
    {
      id: "address",
      name: "address",
      type: "text",
      label: "Facilitator Address",
      autocomplete: "address",
    },
  ];
  

function NewDriver() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#e1e3e6",
        }}
      >
        <CustomPaper title={""} />
        <NewForm
          inputs={driverData}
          sx={{
            bgcolor: "#fcfcfa",
          }}
        />
      </Box>
    </>
  );
}

NewDriver.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default NewDriver;

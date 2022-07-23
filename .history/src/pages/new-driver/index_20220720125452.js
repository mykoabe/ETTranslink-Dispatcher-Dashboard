import { Box } from "@mui/material";
import React from "react";
import NewForm from "../../components/driver/new-form";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";

const driverData = [
  {
    id: "fullName",
    name: "fullName",
    type: "text",
    label: "Full Name",
    autocomplete: "name",
  },
  {
    id: "email",
    name: "email",
    type: "text",
    label: "Email Address",
    autocomplete: "email",
  },
  {
    id: "phoneNumber",
    name: "phoneNumber",
    type: "text",
    label: "phoneNumber",
    autocomplete: "phoneNumber",
  },
  {
    id: "password",
    name: "password",
    type: "text",
    label: "Password",
    autocomplete: "password",
  },
  {
    id: "drivingLicenseNumber",
    name: "drivingLicenseNumber",
    type: "text",
    label: "DrivinglicenceNumber",
    autocomplete: "drivinglicenceNumber",
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
            zz
          }}
        />
      </Box>
    </>
  );
}

NewDriver.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default NewDriver;

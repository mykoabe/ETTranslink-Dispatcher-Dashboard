import { Box } from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import NewForm from "../../components/customer/new-form";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Typography, Button } from "@mui/material";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";
const customerData = [
  {
    id: "fullName",
    name: "fullName",
    type: "text",
    label: "Full Name",
    autocomplete: "name",
  },
  {
    id: "gender",
    name: "gender",
    type: "text",
    label: "Gender",
    autocomplete: "gender",
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
];

function NewCustomer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#e1e3e6",
        }}
      >
        <CustomPaper title={"CUSTOMER"} />
        <NewForm
          inputs={customerData}
          sx={{
            bgcolor: "#fcfcfa",
          }}
        />
      </Box>
    </>
  );
}
NewCustomer.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export

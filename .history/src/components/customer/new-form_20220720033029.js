import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase-config";
import DialogBox from "../common/dialog-box";
import LoadingButton from "@mui/lab/LoadingButton";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://www.techlinkethiopia.com">
        Techlink Ethiopia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function NewForm({ inputs }) {
  const [data, setData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleDriver = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "Drivers", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      setOpen(true);
      setLoading(true);
    } catch (error) {
      alert("There is problem creating Driver");
    }
  };
  const closeHandler = () => {
    setOpen(false);
    navigate("/");
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="sm"
          style={{
            position: "relative",
            zIndex: 4,
            marginTop: -40,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              bgcolor: "#ededeb",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 5,
              }}
            >
              <Typography component="h1" variant="h5">
                Create Driver
              </Typography>
              <Box component="form" onSubmit={handleInput} noValidate sx={{ mt: 1 }}>
                {inputs.map((input) => (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id={input.id}
                    label={input.name}
                    name={input.label}
                    autoComplete={input.autocomplete}
                    onChange={handleInput}
                  />
                ))}

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <LoadingButton
                  onClick={handleCustomer}
                  variant="contained"
                  color="success"
                  loading={loading}
                  type="submit"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create
                </LoadingButton>
              </Box>
            </Box>
          </Paper>
        </Container>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </ThemeProvider>
      {open && (
        <DialogBox
          open={open}
          title={"New Customer is created"}
          content={
            "New customer is just created you can send the credentials and the customer can use these credentials to login"
          }
          closeHandler={closeHandler}
        />
      )}
    </>
  );
}

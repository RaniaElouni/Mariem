import React, { useState } from "react";
import { useEffect } from "react";
import Background from "../Background";
import {
  BgContainer,
  TrelloIconContainer,
  FormSection,
  FormCard,
  Form,
  Title,
  Input,
  Icon,
  Hr,
} from "./Styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Copyright(props) {

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const LoginTest = ({ setUpdate, update }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    try {
      const res = await axios.post("http://localhost:4000/auth",{email,password});
      localStorage.setItem("token", JSON.stringify(res.data)); //bech thot objet ka string
      console.log(res.data,"restoken");
      
      setUpdate(!update);
      navigate("/");
      toast("Wow so easy!")
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
      <BgContainer>
        <Background />
      </BgContainer>
      <Container>
        <FormSection>
          <FormCard className="mt-5 p-1">
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
              <div>
        
        <ToastContainer />
      </div>
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TrelloIconContainer className="p-0 m-0 col-8">
                    <Icon src="https://website-assets-fs.freshworks.com/attachments/ckl25p3pg007cw2fzyjyjb296-logo-coficab.one-half.jpg" />
                  </TrelloIconContainer>

                  <Box
                    component="form"
                 
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      onClick={()=>login()}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
              </Container>
            </ThemeProvider>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default LoginTest;

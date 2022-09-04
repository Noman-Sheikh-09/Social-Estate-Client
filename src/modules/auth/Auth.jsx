import React from "react";
import TextField from "@mui/material/TextField";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import Footer from '../../components/footer/Footer'

import { Link } from "react-router-dom";
import "./AuthStyle.css";
import UseAuth from "./UseAuth";
export default function Auth() {
  const [
    {
      isSignup,
      formData,
      setFormData,
      showPasswordHandler,
      showPassword,
      setShowPassword,
      ctaSubmitHandler,
      switchMode,
      ctaSingUpHandler,
    },
  ] = UseAuth();
  return (
    <div>
      <Container align="Center">
        <Paper
          elevation={5}
          style={{
            width: "100%",
            height: "auto",
            marginTop: "10%",
            paddingBottom: "30px",

          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1 className="authTitle">{isSignup ? "SIGN IN" : "SIGN UP"}</h1>
              <Avatar src="/broken-image.jpg" sizes="50" />
            </Grid>
            {!isSignup && (
              <>
                <Grid
                  item
                  xs={12}
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <TextField
                    placeholder="Name"
                    variant="standard"
                    className="signupFeild"
                    label="Name"
                    name="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <TextField
                    placeholder="Mobile"
                    variant="standard"
                    name="Age"
                    className="signupFeild"
                    label="Mobile"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField
                placeholder="username or email"
                variant="standard"
                className="feild"
                name="email"
                label="Username or email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <TextField
                placeholder="password"
                variant="standard"
                className="passwordFeild"
                name="password"
                label="Password"
                type="password"
                showPasswordHandler={showPasswordHandler}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {!isSignup && (
                <>
                  <TextField
                    placeholder="Confirm password"
                    variant="standard"
                    name="confirmPassword"
                    type="password"
                    className="passwordFeild"
                    label="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </>
              )}
            </Grid>

            <Grid item xs={12}>
              {isSignup ? (
                <button className="loginBtn" onClick={ctaSubmitHandler}>
                  SIGIN
                </button>
              ) : (
                <button className="loginBtn" onClick={ctaSingUpHandler}>
                  SIGNUP
                </button>
              )}
              <br />
              <br />
              <Button variant="outlined" color="inherit" onClick={switchMode}>
                {isSignup
                  ? "don't have an account?: SIGN Up"
                  : "Already have an account?: SIGN IN"}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

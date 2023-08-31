import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    cursor: "pointer",
    color: "gold",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  },
}));

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <AppBar>
      <Container color="transparent" position="static">
        <Toolbar>
          <Typography onClick={() => navigate("/")} className={classes.title}>
            Crypto Hunter
          </Typography>
          <Select
            variant="outlined"
            style={{ width: 100, height: 40, marginLeft: 15 }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import ButtonComponent from "./ButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  additionNumber,
  substractionNumber,
  multiplyNumber,
  devideNumber
} from "../store/Actions";

const MainComponent = () => {
  const calcResult = useSelector(state => state.calculatorEvent);
  const dispatch = useDispatch();
  const [fieldvalue, setFieldValue] = useState("");

  const setClickEvent = value => {
    setFieldValue(`${fieldvalue + "" + value}`);
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid xs={4}>
        <Card className="calc-card">
          <Grid xs={12}>
            <TextField
              id="outlined-secondary"
              className="calc-input"
              variant="outlined"
              value={calcResult}
            />
          </Grid>

          <Grid container xs={12} className="calc-dashbord">
            <Grid xs={5}>
              <ButtonComponent
                label="Clear"
                className="clac-square-btn"
              ></ButtonComponent>
            </Grid>
            <Grid xs={4}>
              <ButtonComponent
                label="="
                className="calc-action-btn"
              ></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent
                label="+"
                className="calc-action-btn"
                onClick={() => dispatch(additionNumber())}
              ></ButtonComponent>
            </Grid>
          </Grid>
          <Grid container xs={12} className="calc-dashbord">
            <Grid xs={3}>
              <ButtonComponent
                label="1"
                onClick={() => setClickEvent("1")}
              ></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent label="2"></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent label="3"></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent
                label="-"
                className="calc-action-btn"
                onClick={() => dispatch(substractionNumber())}
              ></ButtonComponent>
            </Grid>
          </Grid>
          <Grid container xs={12} className="calc-dashbord">
            <Grid xs={3}>
              <ButtonComponent label="4"></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent label="5"></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent label="6"></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent
                label="*"
                className="calc-action-btn"
                onClick={() => dispatch(multiplyNumber())}
              ></ButtonComponent>
            </Grid>
          </Grid>
          <Grid container xs={12} className="calc-dashbord">
            <Grid xs={3}>
              <ButtonComponent label="7"></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent label="8"></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent label="9"></ButtonComponent>
            </Grid>
            <Grid xs={3}>
              <ButtonComponent
                label="/"
                className="calc-action-btn"
                onClick={() => dispatch(devideNumber())}
              ></ButtonComponent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MainComponent;

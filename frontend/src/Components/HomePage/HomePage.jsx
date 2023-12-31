import { Grid } from "@mui/material";
import React from "react";
import { Navigation } from "../Navigation/Navigation";

export const HomePage = () => {
  return (
    <Grid container xs={12} className="px- lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative ">
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className="hidden lg:block w-full relative ">
        <p className="text-center">middle</p>
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative ">
        <p className="text-center">right</p>
      </Grid>
    </Grid>
  );
};

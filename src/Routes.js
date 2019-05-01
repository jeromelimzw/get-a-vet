import React from "react";
import EditLocation from "./EditLocation";
import { Switch, Route } from "react-router-dom";
import LocationList from "./LocationList";
import MapPage from "./MapPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/locations" component={LocationList} />
      <Route path="/edit" component={EditLocation} />
      <Route path="/" component={MapPage} />
    </Switch>
  );
};

export default Routes;

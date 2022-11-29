import * as React from "react";
import { StyledMain, StyledHeader, StyledHeaderText } from "./StyledApp";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./views/Home";
import AddCustomer from "./views/AddCustomer";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeaderText>
          {location.pathname === "/" && "Customer List"}
          {location.pathname === "/add-customer" && "Add Customer"}
        </StyledHeaderText>
      </StyledHeader>
      <Switch>
        <Route path="/add-customer">
          <AddCustomer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </StyledMain>
  );
};

export default App;

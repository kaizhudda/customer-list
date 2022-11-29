import * as React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Customer } from "../../components/Customer/Customer";
import { CustomerState, ICustomer } from "../../types/types";
import { removeCustomer } from "../../redux/actions/customerActions";
import { StyledContainer, StyledAddButton } from "./Home.styles";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  return (
    <>
      <StyledContainer>
        <StyledAddButton onClick={() => history.push("/add-customer")}>
          Add Customer
        </StyledAddButton>
      </StyledContainer>
      {customers.map((customer: ICustomer) => (
        <Customer
          key={customer.id}
          customer={customer}
          removeCustomer={removeCustomer}
        />
      ))}
    </>
  );
};

export default Home;

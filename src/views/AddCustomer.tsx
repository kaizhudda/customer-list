import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AddCustomerForm } from "../components/AddCustomerForm/AddCustomerForm";
import { ICustomer } from "../types/types";
import { addCustomer } from "../redux/actions/customerActions";

export default function AddCustomer() {
  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(addCustomer(customer)),
    [dispatch]
  );
  return (
    <>
      <AddCustomerForm saveCustomer={saveCustomer} />
    </>
  );
}

import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ICustomer } from "../../types/types";
import { StyledCustomerDelete } from "./StyledCustomer";
import { TableData, TableRow } from "../../views/Home/Home.styles";

type Props = {
  customer: ICustomer;
  removeCustomer: (customer: ICustomer) => void;
};

export const Customer: React.FC<Props> = ({ customer, removeCustomer }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(removeCustomer(customer)),
    [dispatch, removeCustomer]
  );

  return (
    <TableRow>
      <TableData data-label="Name">
        {customer.firstName} {customer.lastName}
      </TableData>
      <TableData data-label="Phone number">{customer.phoneNumber}</TableData>
      <TableData data-label="Action">
        <StyledCustomerDelete onClick={() => deleteCustomer(customer)}>
          Delete
        </StyledCustomerDelete>
      </TableData>
    </TableRow>
  );
};

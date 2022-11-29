import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Customer } from "../../components/Customer/Customer";
import {
  Customer as CustomerType,
  CustomerState,
  ICustomer,
} from "../../types/types";
import { removeCustomer } from "../../redux/actions/customerActions";
import {
  StyledContainer,
  StyledAddButton,
  TableHeading,
  TableRow,
  Table,
} from "./Home.styles";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();
  let customers: ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );
  console.log("state", customers);
  const [filteredSearchResults, setFilteredSearchResults] =
    useState<ICustomer[]>(customers);

  useEffect(() => {
    setFilteredSearchResults(getFilteredCustomers(searchTerm));
  }, [customers, searchTerm]);

  const getFilteredCustomers = (searchTerm: string) => {
    return customers.filter(
      (customer) =>
        customer.firstName.toLowerCase().includes(searchTerm) ||
        customer.lastName.toLowerCase().includes(searchTerm)
    );
  };

  const onHandleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase().trim();
    setSearchTerm(value);
    customers = getFilteredCustomers(value);
    console.log("filtered", customers);
    setFilteredSearchResults(customers);
  };

  return (
    <>
      <StyledContainer>
        <StyledAddButton onClick={() => history.push("/add-customer")}>
          Add Customer
        </StyledAddButton>
      </StyledContainer>
      <input
        id="search"
        name="search"
        placeholder="John"
        value={searchTerm}
        onChange={onHandleSearchInput}
      />
      <Table>
        <thead>
          <TableRow>
            <TableHeading scope="col">Name</TableHeading>
            <TableHeading scope="col">Phone number</TableHeading>
            <TableHeading scope="col">Action</TableHeading>
          </TableRow>
        </thead>
        <tbody>
          {filteredSearchResults.map((customer: ICustomer) => (
            <Customer
              key={customer.id}
              customer={customer}
              removeCustomer={removeCustomer}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Home;

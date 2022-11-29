import { Field, Formik, FormikHelpers } from "formik";
import { shallowEqual, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ICustomer, Customer, CustomerState } from "../../types/types";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
  StyledError,
} from "./StyledAddCustomerForm";

type Props = {
  saveCustomer: (customer: ICustomer | any) => void;
};

export const AddCustomerForm = ({ saveCustomer }: Props) => {
  const history = useHistory();
  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  function validateFirstName(value: string) {
    let error;
    if (!value) {
      error = "Please enter a first name";
    }
    return error;
  }

  function validateLastName(value: string) {
    let error;
    if (!value) {
      error = "Please enter a last name";
    }
    return error;
  }

  function validatePhoneNumber(value: string) {
    let error;
    if (!value) {
      error = "Please enter a phone number";
    } else if (
      !/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/i.test(
        value
      )
    ) {
      error = "Please enter a valid phone number";
    }
    return error;
  }

  function validateForm(values: Customer) {
    const findMatch = customers.find(
      ({ firstName, lastName, phoneNumber }) =>
        (firstName === values.firstName && lastName === values.lastName) ||
        phoneNumber === values.phoneNumber
    );
    if (findMatch) {
      return {
        firstName:
          "The customer is already present, please enter another customer name or phone number",
      };
    }
    return {};
  }
  const intialValues: Customer = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };

  return (
    <Formik
      initialValues={intialValues}
      onSubmit={(
        values: Customer,
        { setSubmitting }: FormikHelpers<Customer>
      ) => {
        saveCustomer(values);
        history.push("/");
        setSubmitting(false);
      }}
      validate={validateForm}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <Field
            as={StyledInput}
            id="firstName"
            name="firstName"
            placeholder="John"
            validate={validateFirstName}
          />
          {errors.firstName && touched.firstName && (
            <StyledError>{errors.firstName}</StyledError>
          )}

          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          <Field
            as={StyledInput}
            id="lastName"
            name="lastName"
            placeholder="Doe"
            validate={validateLastName}
          />
          {errors.lastName && touched.lastName && (
            <StyledError>{errors.lastName}</StyledError>
          )}

          <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
          <Field
            as={StyledInput}
            id="phoneNumber"
            name="phoneNumber"
            placeholder="0401122334"
            type="tel"
            validate={validatePhoneNumber}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <StyledError>{errors.phoneNumber}</StyledError>
          )}

          <StyledAddButton type="submit">Add Customer</StyledAddButton>
        </StyledForm>
      )}
    </Formik>
  );
};

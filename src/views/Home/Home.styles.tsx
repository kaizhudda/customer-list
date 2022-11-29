import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  min-width: 100%;
`;

export const StyledAddButton = styled.button`
  padding: 1rem;
  background-color: rgb(4, 121, 205);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

export const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 16px 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
`;

export const Caption = styled.caption`
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
`;

export const TableRow = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
`;

export const TableHeading = styled.th`
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.625em;
  text-align: center;
`;

export const TableData = styled.td`
  padding: 0.625em;
  text-align: center;
`;

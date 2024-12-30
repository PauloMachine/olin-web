import styled from "styled-components";

export const StyleTableScroll = styled.div`
  max-height: auto;
  width: 100%;
  overflow: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  font-size: 14px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: auto;

  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;

  thead tr {
    background-color: #fff;
    color: #000;
    font-weight: bold;
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #eee;
  }

  thead th:first-child {
    border-top-left-radius: 10px;
  }

  thead th:last-child {
    border-top-right-radius: 10px;
  }

  tfoot td:first-child {
    border-bottom-left-radius: 10px;
  }

  tfoot td:last-child {
    border-bottom-right-radius: 10px;
  }
`;

export const StyledTableRow = styled.tr<{
  backgroundColor: string;
  color: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

export const SkeletonTableRow = styled.tr``;

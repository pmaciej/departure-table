import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import { useMediaQuery } from "react-responsive";
import Moment from "react-moment";
import "moment-timezone";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

export default function Table({ data, columns }) {
  const isMedium = useMediaQuery({ query: "(max-width: 1280px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { SearchBar } = Search;

  if (data) {
    return (
      <>
        <ToolkitProvider
          keyField="index"
          data={data}
          columns={columns}
          search={{ searchFormatted: true }}
        >
          {(props) => (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SearchBar
                className="searchBar"
                placeholder="Search for flight"
                {...props.searchProps}
                style={{
                  width: "250px",
                  justifyContent: "left",
                }}
              />
              <BootstrapTable
                striped
                hover
                condensed
                sort={{ dataField: "time", order: "asc" }}
                {...props.baseProps}
              />
            </div>
          )}
        </ToolkitProvider>
      </>
    );
  } else {
    return <>LOADING</>;
  }
}

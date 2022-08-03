import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import filterFactory from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "moment-timezone";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

export default function Table({ data, columns }) {

  const { SearchBar } = Search;

  if (data) {
    return (
      <>
        <ToolkitProvider
          keyField="index"
          data={data}
          columns={columns}
          search
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
                filter={filterFactory()}
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

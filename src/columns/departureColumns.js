import Moment from "react-moment";
export const departureColumnsDesktop = [
  {
    dataField: "apname",
    text: "City",
    sort: true,
  },
  {
    dataField: "time",
    text: "Time",
    sort: true,
    sortFunc: (a, b, order) => {
      if (order === "asc") {
        return Date.parse(a) - Date.parse(b);
      } else if (order === "desc") {
        return Date.parse(b) - Date.parse(a);
      }
    },
    formatter: (value, row) => {
      return <Moment format="MM/DD | hh:mm" date={value} />;
    },
  },
  {
    dataField: "alname",
    text: "Airline",
    sort: true,
  },
  {
    dataField: "fnr",
    text: "Flight Number",
    sort: true,
  },
  {
    dataField: "terminal",
    text: "Terminal",
    sort: true,
    formatter: (value, row) => `T${value}`,
  },
  {
    dataField: "gate",
    text: "Gate",
    sort: true,
  },
  {
    dataField: "status",
    text: "Flight Status",
    sort: true,
  },
  {
    dataField: "sched",
    text: "Scheduled",
    sort: true,
    formatter: (value) => <Moment date={value} format="hh:mm" />,
  },
  {
    dataField: "esti",
    text: "Estimated",
    sort: true,
    formatter: (value) => <Moment date={value} format="hh:mm" />,
  },
  {
    dataField: "duration",
    text: "Duration",
    sort: true,
    formatter: (value, row) => {
      const hours = `${Math.floor(value / 60)}h `;
      const minutes = value % 60 !== 0 ? `${value % 60}min` : "";
      return value ? `${hours + minutes}` : "";
    },
  },
];

export const departureColumnsMedium = [
  {
    dataField: "apname",
    text: (
      <div>
        City
        <br />
        Airline
        <br />
        Terminal
      </div>
    ),
    sort: true,
    formatter: (value, row) => {
      return (
        <div>
          {row.apname}
          <br />
          {row.alname}
          <br />T{row.terminal}
        </div>
      );
    },
  },
  {
    dataField: "time",
    text: (
      <div>
        Time
        <br />
        Flight Number
        <br />
        Status
      </div>
    ),
    sort: true,
    sortFunc: (a, b, order) => {
      if (order === "asc") {
        return Date.parse(a) - Date.parse(b);
      } else if (order === "desc") {
        return Date.parse(b) - Date.parse(a);
      }
    },
    formatter: (value, row, rowIndex, extraData) => {
      return (
        <div>
          <Moment format="MM/DD | hh:mm" date={value} />
          <br />
          {row.fnr}
          <br />
          {row.status}
        </div>
      );
    },
  },
  {
    dataField: "gate",
    text: "Gate",
    sort: true,
  },
  {
    dataField: "sched",
    text: "Scheduled",
    sort: true,
    formatter: (value) => <Moment date={value} format="hh:mm" />,
  },
  {
    dataField: "esti",
    text: "Estimated",
    sort: true,
    formatter: (value) => <Moment date={value} format="hh:mm" />,
  },
  {
    dataField: "duration",
    text: "Duration",
    sort: true,
    formatter: (value, row) => {
      const hours = `${Math.floor(value / 60)}h `;
      const minutes = value % 60 !== 0 ? `${value % 60}min` : "";
      return value ? `${hours + minutes}` : "";
    },
  },
];

export const departureColumnsMobile = [
  {
    dataField: "apname",
    text: (
      <div>
        City
        <br />
        Airline
        <br />
        Terminal
      </div>
    ),
    sort: true,
    formatter: (value, row) => {
      return (
        <div>
          {row.apname}
          <br />
          {row.alname}
          <br />T{row.terminal}
        </div>
      );
    },
  },
  {
    dataField: "time",
    text: (
      <div>
        Time
        <br />
        Flight Number | Gate
        <br />
        Status
      </div>
    ),
    sort: true,
    sortFunc: (a, b, order) => {
      if (order === "asc") {
        return Date.parse(a) - Date.parse(b);
      } else if (order === "desc") {
        return Date.parse(b) - Date.parse(a);
      }
    },
    formatter: (value, row, rowIndex, extraData) => {
      return (
        <div>
          <Moment format="MM/DD | hh:mm" date={value} />
          <br />
          {row.fnr} | {row.gate}
          <br />
          {row.status}
        </div>
      );
    },
  },
];

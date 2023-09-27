const Table = () => {
  return (
    <div
      style={{
        backgroundColor: "brown",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <table
        style={{
          backgroundColor: "black",
          width: "400px",
          textAlign: "center",
          position: "absolute",
          top: "200px",
        }}
      >
        <tr
          // @ts-ignore
          bgcolor="grey"
        >
          <th> Saturday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
        </tr>
        <tr>
          <td>closed</td>
          <td>open</td>
          <td>free</td>
          <td>come</td>
        </tr>
      </table>
    </div>
  );
};
export default Table;

import "./style.css";

function MyTable() {
  return (
    <div>
      <table>
       <tbody>
       <tr>
          <th>Car</th>
          <th>Type</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Mersedes</td>
          <td>AMG63 </td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Bmw</td>
          <td>M7</td>
          <td>Germany</td>
        </tr>
       </tbody>
      </table>
    </div>
  );
}

export default MyTable;
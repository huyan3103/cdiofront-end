import "./Mainee.css"

const Mainee = () => {
  return (
    <div className="mainee">
      <h2>List Employee want to hire you</h2>
      <table className="table-mainee">
        <tr>
          <th>Name</th>
          <th>Salary</th>
          <th>Address</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>Test</td>
          <td>9</td>
          <td>auhsduiahduihasu8dhausdh</td>
          <td>tiadaasasd</td>
          <td>
            <button type="button">Accept</button>
            <button type="button">Reject</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Mainee

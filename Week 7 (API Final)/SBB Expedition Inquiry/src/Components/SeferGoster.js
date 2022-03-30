import React from "react";

function SeferGoster({ toCity, fromCity, connection }) {
  return (
    <div>
      <table className="table table-bordered m-4">
        <thead>
          <tr>
            <th>Kalkis Yeri</th>
            <th>Varis Yeri</th>
            <th>Tarih</th>
            <th>Kalkis Saat</th>
            <th>Varis Saat</th>
            <th>Süre</th>
            <th>Tren</th>
            <th>Platform</th>
          </tr>
        </thead>
        <tbody>
          {connection &&
            connection.map((conn) => (
              <tr>
                <td>{conn["from"]["station"]["name"]}</td>
                <td>{conn["to"]["station"]["name"]}</td>
                <td>{new Date(conn["from"]["departure"]).toDateString()}</td>
                <td>
                  {new Date(conn["from"]["departure"]).toLocaleTimeString(
                    "en-GB"
                  )}
                </td>
                <td>
                  {new Date(conn["to"]["arrival"]).toLocaleTimeString("en-GB")}
                </td>
                <td>{conn["duration"].slice(3, 8)}</td>
                <td>{conn["products"].map((product) => `${product} `)}</td>
                <td>{conn["to"]["platform"]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SeferGoster;

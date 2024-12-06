import React from "react";

function Table({ tablo3 }) {
  const formatDateTime = (dateTime) => {
    return dateTime.replace("T", " "); //
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Kayıt No</th>
          <th>Başlangıç</th>
          <th>Bitiş</th>
          <th>Statü</th>
          <th>Duruş Nedeni</th>
        </tr>
      </thead>
      <tbody>
        {tablo3.map((row, index) => (
          <tr key={index}>
            <td>{row.kayitNo || "N/A"}</td>
            <td>{formatDateTime(row.baslangic)}</td>
            <td>{formatDateTime(row.bitis)}</td>
            <td>{row.statu}</td>
            <td>{row.durusNedeni || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

import React, { useState } from "react";

function Form({ setTablo1 }) {
  const [formInputs, setFormInputs] = useState({
    baslangicSaat: "",
    bitisSaat: "",
    statu: "URETIM",
    durusNedeni: "",
  });

  const bugununTarihi = new Date().toISOString().split("T")[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTablo1((prev) => [
      ...prev,
      {
        kayitNo: prev.length + 1,
        baslangic: `${bugununTarihi}T${formInputs.baslangicSaat}`,
        bitis: `${bugununTarihi}T${formInputs.bitisSaat}`,
        statu: formInputs.statu,
        durusNedeni: formInputs.statu === "DURUŞ" ? formInputs.durusNedeni : "",
      },
    ]);

    setFormInputs({ baslangicSaat: "", bitisSaat: "", statu: "URETIM", durusNedeni: "" });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Yeni Üretim veya Duruş Verisi Ekle</h2>
      <label>
        Başlangıç Saati:
        <input
          type="time"
          name="baslangicSaat"
          value={formInputs.baslangicSaat}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Bitiş Saati:
        <input
          type="time"
          name="bitisSaat"
          value={formInputs.bitisSaat}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Statü:
        <select
          name="statu"
          value={formInputs.statu}
          onChange={handleInputChange}
          required
        >
          <option value="URETIM">Üretim</option>
          <option value="DURUŞ">Duruş</option>
        </select>
      </label>
      {formInputs.statu === "DURUŞ" && (
        <label>
          Duruş Nedeni:
          <input
            type="text"
            name="durusNedeni"
            value={formInputs.durusNedeni}
            onChange={handleInputChange}
            placeholder="Örn: Arıza"
            required
          />
        </label>
      )}
      <button type="submit">Veriyi Kaydet</button>
    </form>
  );
}

export default Form;

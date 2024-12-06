import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import standartDuruslar from "./standartDuruslar";
import "./index.css";

function App() {
  const [tablo1, setTablo1] = useState([]);
  const [tablo3, setTablo3] = useState([]);

  const hesaplaTablo3 = () => {
    let result = [...tablo1];

    standartDuruslar.forEach((durus) => {
      result.push({
        kayitNo: "Standart",
        baslangic: durus.baslangic,
        bitis: durus.bitis,
        statu: "DURUŞ",
        durusNedeni: durus.durusNedeni,
      });
    });

    result.sort((a, b) => new Date(a.baslangic) - new Date(b.baslangic));

    setTablo3(result);
  };

  const tumTablolariSifirla = () => {
    setTablo1([]); 
    setTablo3([]); 
  };

  return (
    <div className="app-container">
      <h1>Üretim Operasyon Yönetimi</h1>
      <Form setTablo1={setTablo1} />

      <div>
        <h2>Tablo 1: Kullanıcı Verileri</h2>
        {tablo1.length > 0 ? (
          <Table tablo3={tablo1} />
        ) : (
          <p>Tablo 1'de veri bulunmamaktadır.</p>
        )}
      </div>

      <div>
        <h2>Tablo 2: Standart Duruş Verileri</h2>
        <Table tablo3={standartDuruslar} />
      </div>

      <div>
        <h2>Tablo 3: Hesaplanan Veriler</h2>
        {tablo3.length > 0 ? (
          <Table tablo3={tablo3} />
        ) : (
          <p>Tablo 3'te veri bulunmamaktadır.</p>
        )}
        <button
          onClick={hesaplaTablo3}
          style={{
            marginTop: "10px",
            backgroundColor: "#5cb85c",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tablo 3'ü Hesapla
        </button>
      </div>

      <div>
        <button
          onClick={tumTablolariSifirla}
          style={{
            marginTop: "20px",
            backgroundColor: "#d9534f",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tüm Tabloları Sıfırla
        </button>
      </div>
    </div>
  );
}

export default App;

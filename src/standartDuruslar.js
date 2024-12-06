const bugununTarihi = new Date().toISOString().split("T")[0];

const standartDuruslar = [
  { kayitNo: "Standart", baslangic: `${bugununTarihi}T10:00`, bitis: `${bugununTarihi}T10:15`, statu: "DURUŞ", durusNedeni: "Çay Molası" },
  { kayitNo: "Standart", baslangic: `${bugununTarihi}T12:00`, bitis: `${bugununTarihi}T12:30`, statu: "DURUŞ", durusNedeni: "Yemek Molası" },
  { kayitNo: "Standart", baslangic: `${bugununTarihi}T15:00`, bitis: `${bugununTarihi}T15:15`, statu: "DURUŞ", durusNedeni: "Çay Molası" },
];

export default standartDuruslar;

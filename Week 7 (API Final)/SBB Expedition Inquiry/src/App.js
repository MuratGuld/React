import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SeferSorgula from "./Components/SeferSorgula";
import SeferGoster from "./Components/SeferGoster";

function App() {
  // Connection Api den gelen veriyi tutar
  const [connection, setConnection] = useState([]);
  // Kalkis istasyonunu tutan veri
  const [fromCity, setFromCity] = useState([]);
  // Varis istasyonunu tutan veri
  const [toCity, setToCity] = useState([]);
  // Yolculuk tarihini tutan veri
  const [departTime, setDepartTime] = useState([]);

  // Fetch metodu ile veriyi API den cekeriz.
  const getConnection = async (e) => {
    const response = await fetch(
      `http://transport.opendata.ch/v1/connections?from=${fromCity}&to=${toCity}&datetime=${departTime}&limit=10`
    );
    const res = await response.json();
    const conn = res["connections"];
    setConnection(conn);
  };

  // useEffect ile metodu cagiririz.
  useEffect(() => {
    getConnection();
  }, []);

  return (
    <div>
      {/* Sefer Sorgula */}
      <SeferSorgula
        setFromCity={setFromCity}
        setToCity={setToCity}
        setDepartTime={setDepartTime}
        getConnection={getConnection}
      />
      {/* Sefer Goster */}
      <SeferGoster
        toCity={toCity}
        fromCity={fromCity}
        connection={connection}
      />
    </div>
  );
}

export default App;

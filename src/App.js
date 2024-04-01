import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import AreaChartComponent from "./components/AreaChartComponent";
import Card from "./components/Card";
import ChartContainer from "./components/ChartContainer";
import CardInfoContainer from "./components/CardInfoContainer";
import Header from "./components/Header";

function App() {
  const [cryptoData, setCryptoData] = useState();
  const [cardData, setCardData] = useState();
  const [date, setDate] = useState();

  const getCryptoCurrencyPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      setDate(moment(response.data.time.updated).format("MMMM Do, YYYY"));

      const formattedData = Object.entries(response.data.bpi).map(
        ([key, value]) => ({ currecncy: key, rate: value.rate_float })
      );
      const cardData = Object.entries(response.data.bpi).map(
        ([key, value]) => ({ ...value })
      );

      setCardData(cardData);
      setCryptoData(formattedData);
    } catch (error) {
      console.error("Error fetching population data:", error);
    }
  };

  useEffect(() => {
    getCryptoCurrencyPrice();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center text-white overflow-y-auto">
      <div className="flex flex-col border border-slate-900 bg-slate-900/50 rounded-xl w-3/4 md:w-2/4 xl:w-1/4 relative">
        <Header />
        <ChartContainer cryptoData={cryptoData} />
        <CardInfoContainer cardData={cardData} />
      </div>
    </div>
  );
}

export default App;

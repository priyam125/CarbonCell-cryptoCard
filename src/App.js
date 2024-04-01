import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import LineChart from "./components/LineChart";

function App() {
  const [cryptoData, setCryptoData] = useState();
  const [cardData, setCardData] = useState();
  const [date, setDate] = useState();

  const getCryptoCurrencyPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      console.log(response.data);
      setDate(moment(response.data.time.updated).format("MMMM Do, YYYY"));

      const formattedData = Object.entries(response.data.bpi).map(
        ([key, value]) => ({ currecncy: key, rate: value.rate_float })
      );

      const cardData = Object.entries(response.data.bpi).map(
        ([key, value]) => ({ ...value })
      );

      console.log(cardData);

      setCardData(cardData);

      console.log(formattedData);

      setCryptoData(formattedData);
      // setPopulationData(formattedData);
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
        <header className="bg-gray-800 top-4 p-2 text-white flex justify-between">
          <span>Bitcoin Price</span>
          <span>{date}</span>
        </header>
        <div className="h-[10rem] flex items-center justify-center p-2">
          <LineChart chartData={cryptoData} />
        </div>
        <div className="flex flex-col p-2 w-full">
          <div className="bg-gray-800 p-1 rounded-sm mb-1">
            Bitcoin Price in different currencies
          </div>
          <div className="flex flex-wrap w-full [&>*:nth-child(1)]:w-full gap-[2%] text-[#a0d2eb] font-semibold">
            {cardData?.map((card) => (
              <div className="md:w-[49%] w-full h-20 bg-[#8884d8] p-2 flex flex-col rounded-sm shadow-lg mb-2">
                <div className="line-clamp-1">
                  {card.description}, <span>{card.code}</span>
                </div>
                <div className="space-x-2 line-clamp-1">
                  <span
                    dangerouslySetInnerHTML={{ __html: card.symbol }}
                  ></span>
                  <span>{card.rate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

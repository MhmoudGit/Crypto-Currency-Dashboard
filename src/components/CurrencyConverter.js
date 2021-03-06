import { useState } from "react";
import ExhcangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [primaryCurrancyExchanged, setPrimaryCurrancyExchanged] =
    useState("BTC");
  const [secondaryCurrancyExchanged, setSecondaryCurrancyExchanged] =
    useState("BTC");
  const [result, setResult] = useState(0);

  console.log(amount);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(exchangeRate * amount);
        setPrimaryCurrancyExchanged(chosenPrimaryCurrency);
        setSecondaryCurrancyExchanged(chosenSecondaryCurrency);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currencies.indexOf(currency)}>
                      {currency}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-amount2"
                  value={result}
                  disabled
                />
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currencies.indexOf(currency)}>
                      {currency}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convertbtn" onClick={convert}>
          convert
        </button>
      </div>

      <ExhcangeRate
        exhcangeRate={exchangeRate}
        chosenPrimaryCurrency={primaryCurrancyExchanged}
        chosenSecondaryCurrency={secondaryCurrancyExchanged}
      />
    </div>
  );
};

export default CurrencyConverter;

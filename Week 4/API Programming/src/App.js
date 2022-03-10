// ANALYSIS SECTION (Currency API Application)
// =================
// We use a React project to work on component basis.
// We use useState as the data model.
// First of all, we get a number value with input from the user.
// Then we ask user to select the currency (entered and converted currency) with the drop downlist.
// When the user enters values, the result is automatically displayed in the second input.
// We obtain the relevant exchange rates from an API related to the Fetch API.
// We use useState to obtain our data with the Fetch API.
// In addition, while obtaining the Fetch API, we pull the data in the form of await with an async method.

import React, { useEffect, useState } from "react";
import "./App.css";
import Amount from "./Components/Amount";
import ConvertedAmount from "./Components/ConvertedAmount";

function App() {
  // We get a value from user as amount.
  const [amount, setAmount] = useState(1);
  // We convert our amount value to a converted value.
  const [convertedAmount, setConvertedAmount] = useState();
  // We use a currecy variable to keep the selected currencies.
  const [currency, setCurrency] = useState({
    firstCurreny: "USD",
    secondCurreny: "TRY",
  });

  // We call our function with useEffect.
  useEffect(() => {
    getCurrency();
  });

  // We write a async function to get the data from API. Then we use this func in useEffect.
  const getCurrency = async () => {
    if (amount > 0) {
      // We dynamically change our API according to the values that comes from user.
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency.firstCurreny}&to=${currency.secondCurreny}`
      );
      const data = await response.json();
      setConvertedAmount(data.rates[currency.secondCurreny]);
    }
  };

  return (
    <React.Fragment>
      {/* Amount component */}
      <Amount
        amount={amount}
        setAmount={setAmount}
        currency={currency}
        setCurrency={setCurrency}
      />
      {/* ConvertedAmount component */}
      <ConvertedAmount
        amount={amount}
        currency={currency}
        setCurrency={setCurrency}
        convertedAmount={convertedAmount}
      />
    </React.Fragment>
  );
}

export default App;

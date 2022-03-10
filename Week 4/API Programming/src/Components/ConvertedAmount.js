const ConvertedAmount = ({
  amount,
  currency,
  setCurrency,
  convertedAmount,
}) => {
  return (
    <div>
      <input
        disabled
        type="number"
        id="paramiktar"
        // We update the result input continuously if the first input value is not empty.
        value={amount === "" ? "" : convertedAmount}
      />
      <select
        // When the user selects a currency, we assign it to the currency variable.
        onChange={(e) => {
          if (e.target.value !== currency.firstCurreny) {
            setCurrency({ ...currency, secondCurreny: e.target.value });
          } else {
            // We warn the user if same options are choosen.
            alert("Please select a different currency!");
            e.target.value = currency.secondCurreny;
          }
        }}
      >
        {/* Currency options */}
        <option value="TRY">TRY</option>
        <option value="CHF">CHF</option>
        <option value="USD">USD</option>
        <option value="EUR">EURO</option>
      </select>
    </div>
  );
};

export default ConvertedAmount;

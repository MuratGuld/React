const Amount = ({ amount, setAmount, currency, setCurrency }) => {
  return (
    <div>
      <input
        type="number"
        id="amountInput"
        value={amount}
        // We get the input value at onChange evetnt as Amount value.
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        // When the user selects a currency, we assign it to the currency variable.
        onChange={(e) => {
          if (e.target.value !== currency.secondCurreny) {
            setCurrency({ ...currency, firstCurreny: e.target.value });
          } else {
            // We warn the user if same options are choosen.
            alert("Please select a different currency!");
            e.target.value = currency.firstCurreny;
          }
        }}
      >
        {/* Currency options */}
        <option value="USD">USD</option>
        <option value="TRY">TRY</option>
        <option value="CHF">CHF</option>
        <option value="EUR">EURO</option>
      </select>
    </div>
  );
};

export default Amount;

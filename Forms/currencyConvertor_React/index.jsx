const { useState, useMemo } = React;

export function CurrencyConverter() {

  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
  };

  const [amount, setAmount] =
    useState(100);

  const [fromCurrency, setFromCurrency] =
    useState("USD");

  const [toCurrency, setToCurrency] =
    useState("EUR");

  const convertedAmounts = useMemo(() => {

    const usdValue =
      amount / rates[fromCurrency];

    return {
      USD: usdValue * rates.USD,
      EUR: usdValue * rates.EUR,
      GBP: usdValue * rates.GBP,
      JPY: usdValue * rates.JPY
    };

  }, [amount, fromCurrency]);

  const convertedAmount =
    convertedAmounts[toCurrency];

  return (

    <div className="container">

      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) =>
          setAmount(Number(e.target.value))
        }
      />

      <div className="selectors">

        <select
          value={fromCurrency}
          onChange={(e) =>
            setFromCurrency(e.target.value)
          }
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>

        <select
          value={toCurrency}
          onChange={(e) =>
            setToCurrency(e.target.value)
          }
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
        </select>

      </div>

      <h2>
        {convertedAmount.toFixed(2)}
        {" "}
        {toCurrency}
      </h2>

    </div>
  );
}
import { useAppDispatch } from "../../../hooks/useAppDispatch.tsx";
import { useAppSelector } from "../../../hooks/useAppSelector.tsx";
import { setCurrency } from "../../../store/currenciesSlice.ts";

import styles from "./CurrencySelector.module.scss";

const CurrencySelector = () => {
  const dispatch = useAppDispatch();
  const selectedCurrency = useAppSelector(
    (state) => state.currenciesReducer.selectedCurrency,
  );

  const handleCurrencyClick = (currency: string) => {
    dispatch(setCurrency(currency));
  };

  const currencies = ["RUB", "EUR", "USD"];

  return (
    <div className={styles.buttonGroup}>
      {currencies.map((currency) => (
        <button
          key={currency}
          onClick={() => handleCurrencyClick(currency)}
          className={`${styles.button} ${
            selectedCurrency.name === currency ? styles.selected : ""
          }`}
        >
          {currency}
        </button>
      ))}
    </div>
  );
};

export default CurrencySelector;

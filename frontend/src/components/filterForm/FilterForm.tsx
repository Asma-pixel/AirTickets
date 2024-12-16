import { useTranslation } from "react-i18next";

import { useAppDispatch } from "../../hooks/useAppDispatch.tsx";
import { useAppSelector } from "../../hooks/useAppSelector.tsx";
import { changeFilterState } from "../../store/filtersSlice.ts";
import AppCheckbox from "../ui/checkbox/AppCheckbox.tsx";

import CurrencySelector from "./CurrencySelector/CurrencySelector.tsx";

import Filter from "../../types/Filter.ts";
import styles from "./FilterForm.module.scss";

const FilterForm = () => {
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector(
    (state) => state.filtersReducer.selectedFilters,
  );

  const { t } = useTranslation();
  const handleCheckboxChange = (name: string) => {
    dispatch(changeFilterState(name));
  };

  return (
    <div className={styles.container}>
      <div className={styles.currencyContainer}>
        <h2>{t("filterForm.currency.title")}</h2>
        <CurrencySelector />
      </div>

      <div className={styles.filtersContainer}>
        <h2>{t("filterForm.filters.title")}</h2>

        <div className={styles.checkboxesContainer}>
          {selectedFilters.map((filter: Filter) => (
            <AppCheckbox
              key={filter.id}
              id={filter.id}
              label={filter.name}
              checked={filter.isActive}
              onChange={() => handleCheckboxChange(filter.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterForm;

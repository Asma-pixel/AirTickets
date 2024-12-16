import { useTranslation } from "react-i18next";

import styles from "./TurkishAirlines.module.scss";
import TurkishAirlinesIcon from "./TurkishAirlinesIcon.tsx";

const TurkishAirlines = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h3>{t("companies.TK")}</h3>
      <TurkishAirlinesIcon />
    </div>
  );
};

export default TurkishAirlines;

import { useTranslation } from "react-i18next";

import TransitionAirplaneIcon from "../../../images/TransitionAirplaneIcon/TransitionAirplaneIcon.tsx";

import styles from "./StopsInformation.module.scss";

interface IArgs {
  stopsCount: number;
}

const StopsInformation = ({ stopsCount }: IArgs) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <span>{t("ticketsPannel.stops", { count: stopsCount })}</span>
      <div className={styles.lineContainer}>
        <span className={styles.line}></span>
        <TransitionAirplaneIcon />
      </div>
    </div>
  );
};

export default StopsInformation;

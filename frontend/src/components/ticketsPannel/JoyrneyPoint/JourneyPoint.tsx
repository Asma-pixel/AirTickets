import formatDate from "../../../helpers/formatDate.ts";
import formatTime from "../../../helpers/formatTime.ts";

import styles from "./JourneyPoint.module.scss";

interface IArgs {
  date: string;
  countryCode: string;
  countryName: string;
  time: string;
}

const JourneyPoint = ({ date, countryCode, countryName, time }: IArgs) => {
  const formatedDate = formatDate(date);
  const formatedTime = formatTime(time);
  return (
    <div className={styles.container}>
      <h3>{formatedTime}</h3>
      <p className={styles.countryInfo}>
        {countryCode}, {countryName}
      </p>
      <p className={styles.dateInfo}>{formatedDate}</p>
    </div>
  );
};

export default JourneyPoint;

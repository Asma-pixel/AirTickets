import { useTranslation } from "react-i18next";

import BALogo from "./BA/BALogo.tsx";
import styles from "./CompanyLogoBuilder.module.scss";
import S7Logo from "./S7/S7Logo.tsx";
import SULogo from "./SU/SULogo.tsx";
import TurkishAirlines from "./TURKISHAIRLINES/TurkishAirlines.tsx";

interface IArgs {
  companyName: string;
}
interface CompaniesType {
  [key: string]: JSX.Element; // Разрешаем доступ к элементам с ключами типа string
}

const Companies: CompaniesType = {
  TK: <TurkishAirlines />,
  S7: <S7Logo />,
  SU: <SULogo />,
  BA: <BALogo />,
};

const CompanyLogoBuilder = ({ companyName }: IArgs) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      {Companies[companyName] ? (
        Companies[companyName]
      ) : (
        <div>{t("companies.unknown")}</div>
      )}
    </div>
  );
};

export default CompanyLogoBuilder;

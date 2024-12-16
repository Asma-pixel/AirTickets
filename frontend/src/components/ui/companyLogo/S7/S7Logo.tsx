import { useTranslation } from "react-i18next";

const S7Logo = () => {
  const { t } = useTranslation();
  return <div>{t("companies.S7")}</div>;
};

export default S7Logo;

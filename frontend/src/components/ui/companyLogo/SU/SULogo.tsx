import { useTranslation } from "react-i18next";

const SULogo = () => {
  const { t } = useTranslation();
  return <div>{t("companies.SU")}</div>;
};

export default SULogo;

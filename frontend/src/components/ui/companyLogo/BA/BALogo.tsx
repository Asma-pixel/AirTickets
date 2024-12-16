import { useTranslation } from "react-i18next";

const BALogo = () => {
  const { t } = useTranslation();
  return <div>{t("companies.BA")}</div>;
};

export default BALogo;

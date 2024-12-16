import { useTranslation } from "react-i18next";

import styles from "./AppCheckbox.module.scss";

interface IProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void; // Только вызов действия
}

const AppCheckbox = ({ id, label, checked, onChange }: IProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.customCheckbox}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      {
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={styles.checkbox} htmlFor={id}></label>
      }
      <label className={styles.checkboxLabel}>
        {t(`filterForm.filters.${label}`)}
      </label>
    </div>
  );
};

export default AppCheckbox;

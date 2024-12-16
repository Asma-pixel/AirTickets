import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";

const formatDate = (inputDate: string): string => {
  const parsedDate = parse(inputDate, "dd.MM.yy", new Date());
  return format(parsedDate, "dd MMM yyyy, EEE", { locale: ru });
};

export default formatDate;

import { parseISO, format } from "date-fns";

const Date = ({ dataString }) => {
  const date = parseISO(dataString);
  return <time dateTime={dataString}>{format(date, "LLLL d, yyyy")}</time>;
};
export default Date;

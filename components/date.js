import { parseISO, format } from 'date-fns';

//esto es para formatear la fecha..

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

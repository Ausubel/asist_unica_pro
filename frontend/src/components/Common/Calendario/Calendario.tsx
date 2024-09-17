import { Calendar, dayjsLocalizer } from "react-big-calendar";
import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/es";
const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "Sin eventos",
};
dayjs.locale("es");
const localizer = dayjsLocalizer(dayjs);
// Configura el locale de momento para que utilice el español
const eventos = [
  {
    start: moment().toDate(),
    end: moment().add(1, "hours").toDate(),
    title: "Evento 1",
    style: () => ({
      backgroundColor: "red",
      borderColor: "red",
      color: "white",
    }),
  },
  {
    start: moment().add(2, "hours").toDate(),
    end: moment().add(3, "hours").toDate(),
    title: "Evento 2",
    style: () => ({
      backgroundColor: "green",
      borderColor: "green",
      color: "white",
    }),
  },
];

const MyCalendar = () => (
  <Calendar
    localizer={localizer}
    events={eventos}
    startAccessor="start"
    endAccessor="end"
    eventPropGetter={(event) => {
      return {
        style: {
          backgroundColor: event.title === "Evento 1" ? "red" : "green",
          borderColor: event.title === "Evento 1" ? "red" : "green",
          color: "white",
        },
      };
    }}
    dayPropGetter={() => {
      return {
        style: {
          background: "rgba(0, 0, 0, 0.4)",
          borderColor: "#ddd", // Color del borde del calendario
        },
      };
    }}
    messages={messages}
    defaultView="week"
    step={180}
    culture="es"
  />
);
export default MyCalendar;

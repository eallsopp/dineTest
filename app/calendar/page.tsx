import { title } from "@/components/primitives";
import Calendar from "@/components/calendar";

export default function CalendarPage() {
  return (
    <>
      <div>
        <h1 className={title()}>Calendar</h1>
        <Calendar />
      </div>
    </>
  );
}

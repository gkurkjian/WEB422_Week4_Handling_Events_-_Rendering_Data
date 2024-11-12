import ClickCounter from "./components/1.ClickCounter";
import ClickCounterBySecond from "./components/2.ClickCounterBySecond";
import Clock from "./components/3.Clock";

export default function Home(props) {
  return (
    <>
    <br /><br />
      <ClickCounter /><br /><br />
      <ClickCounterBySecond /><br /><br />
      <Clock /><br /><br />
    </>
  );
}

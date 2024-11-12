import ClickCounter from "./components/1.ClickCounter";
import ClickCounterBySecond from "./components/2.ClickCounterBySecond";
import Clock from "./components/3.Clock";
import FetchPostWithUseStateUseEffect from "./components/4.PostData";

export default function Home(props) {
  return (
    <>
    <br /><br />
      <ClickCounter /><br /><br />
      <ClickCounterBySecond /><br /><br />
      <Clock /><br /><br />
      <FetchPostWithUseStateUseEffect /><br /><br />
    </>
  );
}

import ClickCounter from "./components/1.ClickCounter";
import ClickCounterBySecond from "./components/2.ClickCounterBySecond";
import Clock from "./components/3.Clock";
import FetchPostWithUseStateUseEffect from "./components/4.PostData";
import PostDataUseEffect from "./components/5.PostDataUseEffect";
import PostDataSWR from "./components/6.PostDataSWR";
import PostDataStatic from "./components/7.PostDataStatic";
import DataRendering from "./components/8.DataRendering";


// // If we wished to fetch the data in Pre-Rendered time, we can use getStaticProps() and throw props in Hom() function.
// // This using Promise to fetch a data
// export function getStaticProps() {
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data =>{
//       resolve({
//         props: {staticPost: data}
//       })
//     })
//   })
// }

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return { props: { staticPost: data } }; // Return props as staticPost
}

export default function Home(props) {
  return (
    <>
      <br /><br />
      <ClickCounter /><br /><br />
      <ClickCounterBySecond /><br /><br />
      <Clock /><br /><br />
      <h1>Here we'll start fetching data from 'URL' by using multiple methods</h1>
      <FetchPostWithUseStateUseEffect /><br /><br />
      <PostDataUseEffect /><br /><br />
      <PostDataSWR /><br /><br />
      <PostDataStatic post={props.staticPost} /><br /><br /> {/* Correct prop passed */}
      <DataRendering /> <br /><br />

    </>
  );
}

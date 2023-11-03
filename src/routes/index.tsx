import { Title } from "solid-start";
import Solid from "../assets/solid.jpeg";

export default function Home() {
  return (
    <main>
      <Title>Solid</Title>
      <h1>SolidJS</h1>
      <a href="/compare">
        <img src={Solid}></img>
      </a>
      <p style={{ "font-size": '30px' }}>
        Solid is a declarative JavaScript library for creating user interfaces.
        <br/>
        First released on 2018.
      </p>
      <p>
        <a href="/compare">
          Compare Solid with React
        </a>
      </p>
    </main>
  );
}

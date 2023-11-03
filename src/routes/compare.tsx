import { Title } from "solid-start";
import React from "../assets/react.jpeg";
import "./compare.css";
import useState from "../assets/useState.png";
import createSignal from "../assets/createSignal.png";
import Both from "../assets/both.png";

export default function Compare() {
  return (
    <main>
      <Title>Compare</Title>
      <img src={React} width={500}></img>
      <h1>Solid & React</h1>
      <p style={{ "font-size": '25px' }}>
        React's unidirectional flow and explicit segregation of read and write in its Hooks API informed Solid's API.
      </p>
      <h2 style={{ "padding-top": "50px", color: "darkblue", "font-size": "50px" }}>
        Similar Hooks.
      </h2>
      <p style={{ "font-size": '25px' }}>
        createSignal and useState
      </p>
      <div class="row">
        <div class="column">
          <img src={createSignal} style="width:100%" />
        </div>
        <div class="column">
          <img src={useState} style="width:100%" />
        </div>
      </div>
      <p style={{ "font-size": '25px' }}>
        createEffect and useEffect
      </p>
      <p style={{ "font-size": '25px' }}>
        createMemo and useMemo
      </p>

      <h2 style={{ "padding-top": "50px", color: "darkblue", "font-size": "50px" }}>
        Fundamental differences
      </h2>

      <div class="row">
        <div class="column">
          <h3 style={{ "font-size": "30px" }}>Solid</h3>
          <ul style={{ "font-size": "20px" }}>
            <li><p>Directly manipulate the browser's DOM</p></li>
            <li><p>Only update the changed components</p></li>
            <li><p>Higher performance?</p></li>
          </ul>
        </div>
        <div class="column">
          <h3 style={{ "font-size": "30px" }}>React</h3>
          <ul style={{ "font-size": "20px" }}>
            <li><p>Use virtual DOM to interface with the browser's actual DOM</p></li>
            <li><p>Re-render all components on each update</p></li>
            <li><p>Relying on DOM difference calculations</p></li>
          </ul>
        </div>
      </div>

      <img src={Both} width={700} style={{ "padding-top": "50px" }}></img>
    </main>
  );
}

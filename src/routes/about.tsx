import { Title } from "solid-start";
import Education from "../assets/education.png";
import Work from "../assets/work.png";
import Hobby from "../assets/hobby.jpeg";

export default function About() {
  return (
    <main>
      <Title>Zhiheng</Title>
      <h1>About Me</h1>

      <img src={Education} width={600}></img>
      <h1>Education</h1>
      <h2>ANU</h2>
      <div style={{ "padding-left": "30%" }}>
        <ul style={{ "font-size": "20px" }}>
          <li><p>Master of Computing (Advanced)</p></li>
          <li><p>Bachelor of Advanced Computing (Honors)</p></li>
        </ul>
      </div>
      <h2>Shandong University</h2>
      <div style={{ "padding-left": "30%" }}>
        <ul style={{ "font-size": "20px" }}>
          <li><p>Bachelor of Computer Science</p></li>
        </ul>
      </div>

      <img src={Work} width={600} style={{"padding-top": "50px"}}></img>
      <h1>Work</h1>
      <h2>Agile Digital</h2>
      <div style={{ "padding-left": "30%" }}>
        <ul style={{ "font-size": "20px" }}>
          <li><p>Attended project: RFS, Thinkcaddie, DAWE, Nutrien, Cinefly, TGA</p></li>
        </ul>
      </div>
      <h2>ANU</h2>
      <div style={{ "padding-left": "30%" }}>
        <ul style={{ "font-size": "20px" }}>
          <li><p>Research Assistant</p></li>
          <li><p>Teaching Assistant</p></li>
        </ul>
      </div>

      <iframe src="//player.bilibili.com/player.html?aid=499991890&bvid=BV1EK411A7ai&cid=244888397&p=1&t=73" width={600} height={400}></iframe>
      <h1>Hobby</h1>
      <div style={{ "padding-left": "30%" }}>
        <ul style={{ "font-size": "20px" }}>
          <li><p>Violin</p></li>
          <li><p>Game</p></li>
        </ul>
      </div>
      
    </main>
  );
}

import "./App.css";
import LogoPlayer from "./assets/logo.svg";
import Parar from "./assets/stop.svg";
import Voltar from "./assets/previous.svg";
import Pause from "./assets/pause.svg";
import Play from "./assets/play.svg";
import Next from "./assets/next.svg";

import musics from "./musics";
import MusicDisplay from "./components/displayMusic.js";
import Player from "../src/components/player/index.js";

import ProfilePic from "./assets/profile.jpg";
import { useState } from "react";
import musicDislpay from "./components/displayMusic.js";

function App() {
  const [stateMusics, setStateMusics] = useState([...musics]);
  const [currentMusic, setCurrentMusic] = useState({});

  return (
    <div className="container">
      <header>
        <img src={LogoPlayer} />
        <div className="userData">
          <img className="profile" src={ProfilePic} />
          <p>Bem vindo, Daniel</p>
        </div>
      </header>

      <main>
        <div className="list">
          <h2>The best play list</h2>
          <div className="limitArea">
            <>
              <MusicDisplay
                object={musics[0]}
                setCurrentMusic={setCurrentMusic}></MusicDisplay>
              <MusicDisplay
                object={musics[1]}
                setCurrentMusic={setCurrentMusic}></MusicDisplay>
              <MusicDisplay
                object={musics[2]}
                setCurrentMusic={setCurrentMusic}></MusicDisplay>
              <MusicDisplay
                object={musics[3]}
                setCurrentMusic={setCurrentMusic}></MusicDisplay>
            </>
          </div>
        </div>
      </main>

      <footer>
        <Player
          musics={musics}
          Parar={Parar}
          Voltar={Voltar}
          Pause={Pause}
          Next={Next}
          currentMusic={currentMusic}
          setCurrentMusic={setCurrentMusic}
          Play={Play}
        />
      </footer>
    </div>
  );
}

export default App;

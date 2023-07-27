import "./style.css";

export default function Player({
  Parar,
  Voltar,
  Pause,
  Play,
  Next,
  currentMusic,
  setCurrentMusic,
  musics,
}) {
  let pauseBtn = document.getElementById("player");

  let empty = {
    title: "",
    artist: "",
    url: "",
  };
  function stopMusic() {
    removeButton();
    setCurrentMusic(empty);
  }

  function removeButton() {
    document.getElementById("play").style.display = "none";
    document.getElementById("pauses").style.display = "flex";
  }

  function pauser() {
    let indicator = currentMusic.url;
    console.log(indicator);
    if (indicator == undefined || indicator == "") {
      return;
    } else {
      pauseBtn.pause();
      document.getElementById("pauses").style.display = "none";
      document.getElementById("play").style.display = "flex";
    }
  }

  function playBtn() {
    pauseBtn.play();
    removeButton();
  }

  function nextMusic(a) {
    let i = currentMusic.id - 1 + a;
    let changeTo = musics[i];
    if (musics[i] != undefined) setCurrentMusic(changeTo);
  }

  setTimeout(() => {
    removeButton();
  }, 10);
  return (
    <>
      <div className="smallCont">
        <div className="info">
          <strong>{currentMusic.title}</strong>
          <span>{currentMusic.artist}</span>
        </div>
        <div className="btns">
          <img id="" src={Parar} onClick={() => stopMusic()} />
          <img src={Voltar} onClick={() => nextMusic(-1)} />
          <img id="pauses" src={Pause} onClick={() => pauser()} />
          <img id="play" src={Play} onClick={() => playBtn()} />
          <img src={Next} onClick={() => nextMusic(+1)} />
          <div>
            <audio id="player" src={currentMusic.url} controls autoPlay></audio>
          </div>
        </div>
      </div>
    </>
  );
}

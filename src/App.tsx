import { useState } from "react";
import Header from "./components/common/Header";
import ModeForm from "./components/common/ModeForm";
import Start from "./components/Start";
import Home from "./components/Home";

function App() {
  const [start, setStart] = useState(false);
  const handleClickStart = () => {
    setStart(true);
  };

  const [mode, setMode] = useState({
    isAuto: true,
    time: 2.5,
    character: "both",
  });

  const handleChangeAuto = () => {
    setMode({
      ...mode,
      isAuto: !mode.isAuto,
    });
  };

  const handleChangeTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode({
      ...mode,
      time: +e.target.value,
    });
  };

  const handleChangeCharacter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode({
      ...mode,
      character: e.target.value,
    });
  };

  return (
    <>
      <Header>
        {start && (
          <ModeForm
            {...mode}
            onChangeAuto={handleChangeAuto}
            onChangeTime={handleChangeTime}
            onChangeCharacter={handleChangeCharacter}
          />
        )}
      </Header>
      <main className="h-full flex justify-center items-center">
        {start ? (
          <Start {...mode} />
        ) : (
          <Home
            modelForm={
              <ModeForm
                {...mode}
                onChangeAuto={handleChangeAuto}
                onChangeTime={handleChangeTime}
                onChangeCharacter={handleChangeCharacter}
              />
            }
            onClickStart={handleClickStart}
          />
        )}
      </main>
    </>
  );
}

export default App;

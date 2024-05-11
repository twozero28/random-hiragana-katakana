import React from "react";

interface Props {
  modelForm: React.ReactNode;
  onClickStart: React.MouseEventHandler<HTMLButtonElement>;
}
const Home = ({ modelForm, onClickStart }: Props) => {
  return (
    <main className="h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl lg:text-3xl">
            Let's Study Hiragana and Katakana
          </h1>
          <p className="text-sm lg:text-base mt-4">
            A random hiragana or katakana character will appear.
            <br />
            Try to guess the pronunciation.
          </p>
        </div>
        <div className="my-6">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={onClickStart}
          >
            Start
          </button>
        </div>
        <div>{modelForm}</div>
      </div>
    </main>
  );
};

export default Home;

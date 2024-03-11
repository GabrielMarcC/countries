import { ControlTheme } from "../ThemeProvider/control-theme";

export const Header = () => {
  return (
    <header className="w-full  flex flex-row justify-between p-4 lg:p-7 items-center shadow-md  dark:bg-dark_blue">
      <h1 className="font-bold lg:text-[30px] lg:ml-4 py-4">
        Where in the world?
      </h1>
      <div className="w-[40%] xl:w-[20%] flex justify-center items-center gap-1 py-4">
        <ControlTheme />
        <span className={`font-semibold lg:text-[20px] lg:px-4 `}>
          Dark Mode
        </span>
      </div>
    </header>
  );
};
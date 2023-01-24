import { PropsWithChildren } from "react";
import "./style.css";

function Header({ children }: PropsWithChildren) {
  return (
    <header className="app-header">
      <h1 className="app-header__title">Поиск авиабилетов</h1>
    </header>
  );
}

export default Header;

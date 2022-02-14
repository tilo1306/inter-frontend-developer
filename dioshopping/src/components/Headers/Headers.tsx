import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
type Props = {
  clickFn: () => void;
  inputFn: (e: ChangeEvent<HTMLInputElement>) => void;
  selectFn: (e: ChangeEvent<HTMLSelectElement>) => void;
};
export const Headers = ({ clickFn, inputFn, selectFn }: Props) => {
  return (
    <header>
      <div id="header">
        <h1>DioShopping</h1>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/Contato">Contato</Link>
        </h3>
        <button id="btn-car"></button>
      </div>
      <div id="search">
        <select name="camisa" id="shirt" onChange={selectFn}>
          <option value="all">Selecione um Tipo de Camisa</option>
          <option value="time-brazil">Clubes brasileiros"</option>
          <option value="time-europe">Clubes europeus</option>
          <option value="history">Camisas históricas</option>
          <option value="world-time">Seleções nacionais</option>
          <option value="casual">Casuais</option>
        </select>
        <div id="area-search">
          <input
            type="text"
            placeholder="Buscar por camisa"
            onChange={inputFn}
          />
          <button id="search" onClick={clickFn}>
            buscar
          </button>
        </div>
      </div>
    </header>
  );
};

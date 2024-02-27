import stylesPc from "./BtnDelete.module.scss";

const style = stylesPc;

export default function BtnDelete({ onClick }) {
  return <div className={style.btnDelete} onClick={onClick}></div>;
}

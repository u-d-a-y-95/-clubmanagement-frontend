import MasterError from "../master-error";
import MasterInputArea from "../master-input-area";
import MasterLabel from "../master-label";
import style from "./master-text-area.module.css"

const MasterTextArea = ({ label,id,placeholder,value,onChange,error}) => {
  return (
    <div className={style.container}>
      <MasterLabel label={label} className={style.label} id={id}/>
      <MasterInputArea id={id} placeholder={placeholder || `enter ${label}`} className={`${style.input} ${error ?style.errorInput :""}`} value={value} onChange={onChange}/>
      <MasterError error={`* ${error}`} className={style.error}/>
    </div>
  );
};

export default MasterTextArea;

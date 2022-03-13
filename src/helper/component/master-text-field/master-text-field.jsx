import MasterError from "../master-error";
import MasterInput from "../master-input";
import MasterLabel from "../master-label";
import style from "./master-text-field.module.css"

const MasterTextField = ({ label,id,placeholder,value,onChange,error,type}) => {
  return (
    <div className={style.container}>
      <MasterLabel label={label} className={style.label} id={id}/>
      <MasterInput id={id} placeholder={placeholder || `enter ${label}`} className={`${style.input} ${error ?style.errorInput :""}`} type={type} value={value} onChange={onChange}/>
      <MasterError error={`* ${error}`} className={style.error}/>
    </div>
  );
};

export default MasterTextField;

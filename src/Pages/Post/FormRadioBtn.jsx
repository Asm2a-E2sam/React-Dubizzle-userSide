import { useState } from "react";

export default function FormRadioBtn(args){
    const [isActive, setIsActive] = useState(false);

  const radioActive = () => {
    setIsActive(!isActive);
  };

  const radioClasses = isActive ? 'radio-btn radio-btn-active mx-2' : 'radio-btn mx-2';

  return (
    <div className={radioClasses} onClick={radioActive}>
      <div className="outer">
        <div className="inner"></div>
      </div>
      <p>{args.label}</p>
    </div>
  );
}
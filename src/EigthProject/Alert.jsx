import React from "react";
import { useEffect } from "react";

function Alert({ show, msg, type, SettingAlert,list }) {


  useEffect(() => {
    const howMuchTime = setTimeout(() => {
      SettingAlert();
      // here we are setting the alert only for 3 seconds ,if we don't put set time out it will stay there only
    }, 2000);

    return () => clearTimeout(howMuchTime);
  },[list]);

  return (
    <div className="alert-container">
      <div className={`alert ${type}`}>
        <p>{msg}</p>
      </div>
    </div>
  );
}

export default Alert;

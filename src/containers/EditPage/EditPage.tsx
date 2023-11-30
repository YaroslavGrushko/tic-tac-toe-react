import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { setMainMessage } from "../../state/ducks/appSlice";

import "./EditPage.css";

const EditPage = () => {
  const dispatch = useAppDispatch();
  const mainMessage = useAppSelector((state) => state.app.mainMessage);
  const [message, setMessage] = useState(mainMessage);

  const onChange = (event) => {
    const value = event.target.value;
    setMessage(value);
  };
  const onSave = () => {
    dispatch(setMainMessage(message));
  };
  return (
    <div className="edit-page">
      <label htmlFor="message">Type Message to check Redux:</label>{" "}
      <input id="message" type="text" onChange={onChange} value={message} />
      <input type="button" onClick={onSave} value="Save" />
    </div>
  );
};

export default EditPage;

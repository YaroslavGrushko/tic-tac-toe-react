import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMainMessage } from "../../state/ducks/appSlice";
import "./EditPage.css";

const EditPage = () => {
  const dispatch = useDispatch();
  const mainMessage = useSelector((state) => state.app.mainMessage);
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

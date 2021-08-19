import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_ERROR_MESSAGE,
  CLEAR_SUCCESS_MESSAGE,
  selectMessage,
} from "../../redux/reducers/message.reducer";
import Alert from "../Alert/Alert.component";

const AlertBox = () => {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  const clearErrorHandler = () => dispatch(CLEAR_ERROR_MESSAGE());
  const clearSuccessHandler = () => dispatch(CLEAR_SUCCESS_MESSAGE());

  return (
    <div>
      {message.failure && (
        <Alert
          type="failure"
          message={message.failure}
          onClose={clearErrorHandler}
        />
      )}
      {message.success && (
        <Alert
          type="success"
          message={message.success}
          onClose={clearSuccessHandler}
        />
      )}
    </div>
  );
};

export default AlertBox;

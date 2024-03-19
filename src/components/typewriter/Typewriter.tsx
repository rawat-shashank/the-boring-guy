"use client";
import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";
import { TYPE_WRITER } from "../../constants/config";

export const TypeWriter = ({
  messages,
}: {
  messages: string[];
}): JSX.Element => {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TYPE_WRITER.TYPING_SPEED,
  });

  useEffect(() => {
    let timer: string | number | ReturnType<typeof setTimeout> = "";
    const handleType = () => {
      setState((cs) => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs),
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting, state.typingSpeed]);

  useEffect(() => {
    let timer: string | number | ReturnType<typeof setTimeout> = "";
    if (!state.isDeleting && state.text === state.message) {
      timer = setTimeout(() => {
        setState((cs) => ({
          ...cs,
          isDeleting: true,
        }));
      }, TYPE_WRITER.DELAY_SPEED);
    } else if (state.isDeleting && state.text === "") {
      setState((cs) => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages),
      }));
    }
    return () => clearTimeout(timer);
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? TYPE_WRITER.TYPING_SPEED
      : TYPE_WRITER.DELETING_SPEED;
  }

  return (
    <h1>
      <span>{state.text}</span>
      <span className={styles.cursor} />
    </h1>
  );
};

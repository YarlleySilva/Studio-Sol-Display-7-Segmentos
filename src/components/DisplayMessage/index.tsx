import React from "react";

const DisplayMessage = ({ statusMsg }: any) => {
  const renderDisplay = (status: string) => {
    switch (status) {
      case "HIGHER":
        return <span className="message-higher">É maior</span>;
      case "LOWER":
        return <span className="message-lower">É menor</span>;
      case "WINNER":
        return <span className="message-win">Você acertou!!!</span>;
      case "ERROR":
        return <span className="message-error">Erro</span>;
      default:
        return "";
    }
  };

  return <>{renderDisplay(statusMsg)}</>;
};

export default DisplayMessage;

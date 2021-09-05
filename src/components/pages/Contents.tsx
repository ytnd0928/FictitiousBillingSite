import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import { Warning } from "./Warning";

export const Contents: VFC = memo(() => {
  const history = useHistory();

  const onClickWarning = () => {
    history.push();
  };
  return (
    <div>
      <p onClick={onClickWarning}>黒ギャル</p>
      <br />
      <p onClick={onClickWarning}>白ギャル</p>
      <br />
      <p onClick={onClickWarning}>柔道着</p>
    </div>
  );
});

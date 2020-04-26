import React from "react";
import { Input } from "antd";

// const ADD_1N_N = instance._Z8ADD_1N_NPii;

const plus_one = () => {
  const [numberValue, setNumberValue] = React.useState("");

  const [wasm, setWasm] = React.useState(null);
  React.useEffect(() => {
    import("../../../modules/N3/ADD_1N_N.wasm").then(setWasm);
  }, [setWasm]);
  const result = React.useMemo(() => {
    if (wasm === null) return null;
    // const ADD_1N_N = wasm._Z8ADD_1N_NPii;
    // if (numberValue !== "") {
    //   const numberArr = numberValue.split("");
    //   for (let i = 0; i < numberArr.length; i++) {
    //     numberArr[i] = parseInt(numberArr[i]);
    //   }
    //   return ADD_1N_N(numberArr, numberArr.length);
    // }
  }, [wasm, numberValue]);

  return (
    <div>
      <Input
        value={numberValue || ""}
        onChange={(event) => setNumberValue(event.target.value)}
        placeholder="Введите число"
      />
      <div>{result}</div>
    </div>
  );
};
export default plus_one;

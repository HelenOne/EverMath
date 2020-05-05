import React from 'react';

export const debounce = <T extends Function>(cb: T, wait = 300) => {
  let h: NodeJS.Timeout | null = null;
  let callable = (...args: any) => {
    if (h !== null) clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
};

export const useMemoDebounced = <T extends (...args: any) => any>(
  fabric: T,
  deps: unknown[],
  wait = 300
): [ReturnType<T>, boolean] => {
  const initValue = React.useMemo(fabric as any, []);
  const [value, setValue] = React.useState(initValue);
  const [computing, setComputing] = React.useState(false);
  const debouncer = React.useRef<null | (() => void)>(null);
  const fabricRef = React.useRef(fabric);
  fabricRef.current = fabric;

  React.useEffect(() => {
    if (debouncer.current === null) {
      debouncer.current = debounce(() => {
        setValue(fabricRef.current());
        setComputing(false);
      }, wait);
    }
    debouncer.current();
    setComputing(true);
  }, deps);

  return [value as any, computing];
};

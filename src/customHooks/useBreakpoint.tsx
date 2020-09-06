import { useState, useEffect } from "react";
import { throttle } from "lodash";

interface Props {
  deviceWidth: string;
}

const getDeviceConfig = (width: number): string => {
  if (width < 320) {
    return "xs";
  } else if (width >= 320 && width < 720) {
    return "sm";
  } else if (width >= 720 && width < 1024) {
    return "md";
  } else if (width >= 1024) {
    return "lg";
  } else {
    return "";
  }
};

const useBreakpoint = (): string => {
  const [brkPnt, setBrkPnt] = useState<string>(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};

export default useBreakpoint;

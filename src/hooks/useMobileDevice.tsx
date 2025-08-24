import { useEffect, useState } from "react";
import { SCREEN_TYPE } from "../enums/screenType";


function useDeviceType(): SCREEN_TYPE {
  const [deviceType, setDeviceType] = useState<SCREEN_TYPE>(SCREEN_TYPE.DESKTOP);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setDeviceType(SCREEN_TYPE.MOBILE);
      } else if (width >= 640 && width < 1024) {
        setDeviceType(SCREEN_TYPE.TABLET);
      } else {
        setDeviceType(SCREEN_TYPE.DESKTOP);
      }
    };

    // run on mount
    checkDevice();

    // listen to resize
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return deviceType;
}

export default useDeviceType;

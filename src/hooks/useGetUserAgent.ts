import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { UserAgentTypes } from "../types/userAgentTypes";

export const useGetUserAgent = (): UserAgentTypes => {
  const [deviceState, setDeviceState] = useState<UserAgentTypes>("mobile");

  useEffect(() => {
    setDeviceState(isMobile ? "mobile" : "desktop");
  }, [isMobile]);

  return deviceState;
};

export const useMobileDetect = () => {
  const isMobile = /Android|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return isMobile;
};

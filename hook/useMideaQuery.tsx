import { useEffect, useState } from "react";

export const Mobile = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{isMobile && children}</>;
};

export const PC = ({ children }) => {
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= 769);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{isPc && children}</>;
};

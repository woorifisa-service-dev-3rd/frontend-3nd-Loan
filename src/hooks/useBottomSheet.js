import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import usePreviousValue from "./usePreviousValue";

const useBottomSheet = (onClose) => {
  const [isOpen, setIsOpen] = useState(true);
  const controls = useAnimation();
  const prevIsOpen = usePreviousValue(isOpen);

  const onDragEnd = (info) => {
    const shouldClose = info?.y > 20 || (info?.y >= 0 && info.point.y > 45);

    if (shouldClose) {
      controls.start("hidden");
      setIsOpen(false);
      onClose(); // onClose 함수 호출
    } else {
      controls.start("visible");
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (prevIsOpen && !isOpen) {
      controls.start("hidden");
    } else if (!prevIsOpen && isOpen) {
      controls.start("visible");
    }
  }, [controls, isOpen, prevIsOpen]);

  return { onDragEnd, controls, setIsOpen, isOpen };
};

export default useBottomSheet;

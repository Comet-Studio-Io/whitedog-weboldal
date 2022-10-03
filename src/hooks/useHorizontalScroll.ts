import { RefObject, useEffect } from "react";

const useHorizontalScroll = (
  ref: RefObject<HTMLDivElement>,
): RefObject<HTMLDivElement> => {
  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef != null) {
      const onWheel = (e: WheelEvent): void => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        currentRef.scrollTo({
          left: currentRef.scrollLeft + e.deltaY * 4,
          behavior: "smooth",
        });
      };

      currentRef.addEventListener("wheel", onWheel);

      return () => currentRef.removeEventListener("wheel", onWheel);
    }
  }, []);

  return ref;
};

export default useHorizontalScroll;

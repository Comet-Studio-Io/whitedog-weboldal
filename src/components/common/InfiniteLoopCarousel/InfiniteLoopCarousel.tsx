import { useCallback, useEffect, useRef, useState } from "react";

const InfiniteCarouselLoop = ({
  durationInSeconds,
  direction,
  children,
}: {
  durationInSeconds: number;
  direction: "right" | "left";
  children: React.ReactNode;
}): JSX.Element => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const resetAnimation = (): void => {
    if (innerRef?.current != null) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current != null) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  };

  const setupInstances = useCallback(() => {
    if (innerRef?.current == null || outerRef?.current == null) return;

    const { width } = innerRef.current.getBoundingClientRect();

    const { width: parentWidth } = outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;

    const instanceWidth = width / innerRef.current.children.length;

    if (widthDeficit !== 0) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1,
      );
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div ref={outerRef} className="looper w-full overflow-hidden">
      <div
        ref={innerRef}
        className="looper__innerList flex justify-center w-fit"
        data-animate="true"
      >
        {[...Array(looperInstances)].map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="looper__listInstance flex w-max animate-none"
            style={{
              animationDuration: `${durationInSeconds}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarouselLoop;

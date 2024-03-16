import { useRef, useEffect } from "react";
import type { HTMLAttributes, PropsWithChildren, FC } from "react";

interface OutsideClickHandlerProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  onOutsideClick: () => void;
}

const OutsideClickHandler: FC<OutsideClickHandlerProps> = (props) => {
  const { children, onOutsideClick } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickHandler;

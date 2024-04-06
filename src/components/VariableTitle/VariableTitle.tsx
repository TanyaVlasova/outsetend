import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import { useMatchMedia } from 'hooks';

import styles from './VariableTitle.module.css';

import type { FC, HTMLAttributes } from 'react';

export interface VariableTitleProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  card?: JSX.Element;
}

const VariableTitle: FC<VariableTitleProps> = (props) => {
  const { className, text, card, ...restProps } = props;
  const [showedCard, setShowedCard] = useState(false);
  const { hasCursor } = useMatchMedia();
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShowCard = () => {
    setShowedCard(true);
  };

  const handleHideCard = () => {
    setShowedCard(false);
  };

  // Эффект для изменения толщины вариантивного шрифта по движению курсора
  useEffect(() => {
    const weightRange = [100, 700];
    const weightScale = weightRange[1] - weightRange[0];
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    const handleResize = () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!titleRef?.current) return;

      const cursorCoords = {
        x: +((event.clientX / windowWidth) * 100).toFixed(3),
        y: +((event.clientY / windowHeight) * 100).toFixed(3),
      };

      const titleWeight = Math.round(weightRange[0] + (cursorCoords.x * weightScale) / 100);
      titleRef.current.style.fontVariationSettings = `"wght" ${titleWeight}`;

      if (!cardRef?.current || !showedCard) return;

      cardRef.current.style.transform = `translate(${cursorCoords.x}vw, ${cursorCoords.y}vh)`;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showedCard]);

  return (
    <div className={cn(styles.wrapper, className)} {...restProps}>
      <div className={styles.container}>
        <div
          className={styles.title}
          ref={titleRef}
          dangerouslySetInnerHTML={{ __html: text }}
          onMouseEnter={handleShowCard}
          onMouseLeave={handleHideCard}
        />
        {hasCursor && card && (
          <div className={cn(styles.card, { [styles.visible]: showedCard })} ref={cardRef}>
            {card}
          </div>
        )}
      </div>
    </div>
  );
};

const VariableTitleContainer: FC<VariableTitleProps> = (props) => {
  const { hasCursor } = useMatchMedia();
  const [angle, setAngle] = useState(0);

  function handleChange() {
    setAngle(window.screen.orientation.angle);
  }

  useEffect(() => {
    window.screen.orientation.addEventListener('change', handleChange);

    return () => window.screen.orientation.removeEventListener('change', handleChange);
  }, []);

  return hasCursor ? (
    <VariableTitle {...props} text={angle.toString()} />
  ) : (
    <VariableTitle {...props} text={angle.toString()} />
  );
};

export default VariableTitleContainer;

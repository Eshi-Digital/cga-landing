import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import CarouselControls from "./CarouselControls";
import Dots from "./Dots";
import Autoplay from "embla-carousel-autoplay";

type Props = PropsWithChildren &
  EmblaOptionsType & {
    className?: string;
    style?: React.CSSProperties;
  };

const Carousel = ({ children, ...options }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const length = React.Children.count(children);
  const canScrollPrev = !!emblaApi?.canScrollPrev();
  const canScrollNext = !!emblaApi?.canScrollNext();

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  return (
    <>
      <div
        className={`overflow-hidden ${options.className}`}
        ref={emblaRef}
        style={options.style}
      >
        <div className="flex">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </>
  );
};
export default Carousel;

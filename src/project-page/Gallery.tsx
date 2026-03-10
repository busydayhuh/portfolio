import useEmblaCarousel from "embla-carousel-react";
import type { Project } from "../data/projects";
import "./embla.css";
import { NextButton, PrevButton, usePrevNextButtons } from "./GalleryButtons";
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from "./GallerySelectedSnap";

export function Gallery({ images }: { images: Project["gallery"] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <div className="px-1 lg:px-0 embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="min-h-[11.8rem] md:min-h-96 lg:min-h-152 embla__slide__image">
                <img
                  src={image.main}
                  srcSet={`${image.main_mob} 800w, ${image.main} 1600w, ${image.full} 2784w`}
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1600px) 1600px, 100vw"
                  alt={`Скриншот ${index + 1}`}
                  className="rounded-[1.8rem] w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </div>
  );
}

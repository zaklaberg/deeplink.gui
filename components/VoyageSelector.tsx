import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { OverviewVoyage } from "../api/getAllVoyages";
import { Hint } from "react-autocomplete-hint";
import { IHintOption } from "react-autocomplete-hint/dist/src/IHintOption";
import PrimaryButton from "./inputs/PrimaryButton";

const VoyageSelector = ({
  voyages,
  onVoyageSelected,
}: {
  voyages: OverviewVoyage[];
  onVoyageSelected: (voyage: OverviewVoyage) => void;
}) => {
  const [query, setQuery] = useState("");
  const [guessedVoyage, setGuessedVoyage] = useState<OverviewVoyage | null>(
    null
  );
  const [chosenVoyage, setChosenVoyage] = useState<OverviewVoyage | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<number>();

  useEffect(() => {
    if (!query) {
      setImageLoaded(false);
      setChosenVoyage(null);
    }
  }, [query]);

  const setGuessedVoyage_ = (hint: IHintOption) => {
    if (!hint && query && guessedVoyage) {
      clearTimeout(imageRef.current);
      return;
    }

    if (!hint?.id) {
      clearTimeout(imageRef.current);
      setImageLoaded(false);
      setGuessedVoyage(null);
      return;
    }

    const voyage = voyages.find((v) => v.id === hint.id);
    if (!voyage) {
      clearTimeout(imageRef.current);
      setImageLoaded(false);
      setGuessedVoyage(null);
      return;
    }

    if (voyage.id === guessedVoyage?.id) {
      return;
    }

    setImageLoaded(false);
    clearTimeout(imageRef.current);
    imageRef.current = window.setTimeout(() => {
      setGuessedVoyage(voyage);
    }, 500);
  };

  return (
    <div>
      <h1 className="mb-4">Select a voyage</h1>

      <div className="relative h-[420px] w-[800px]">
        {guessedVoyage && (
          <div className="absolute top-0 flex flex-col w-full">
            <hr
              className={clsx(
                "border-0 self-center bg-black h-0.5 transition-all",
                {
                  "w-full": imageLoaded,
                  "w-0": !imageLoaded,
                }
              )}
            />
            <div
              className={clsx(
                "relative flex flex-col items-center transition-opacity duration-500 w-full h-[400px]",
                {
                  "opacity-0": !imageLoaded,
                  "opacity-100": imageLoaded,
                }
              )}
            >
              <Image
                onLoad={() => requestAnimationFrame(() => setImageLoaded(true))}
                layout="fill"
                src={guessedVoyage.imageUrl}
                alt={guessedVoyage.imageAlt}
              />
            </div>
            <hr
              className={clsx(
                "border-0 self-center bg-black h-0.5 transition-all",
                {
                  "w-full": imageLoaded,
                  "w-0": !imageLoaded,
                }
              )}
            />
          </div>
        )}
        <Hint
          onHint={setGuessedVoyage_}
          onFill={(h: IHintOption) => {
            const voyage =
              voyages.find((v) => v.id === h.id.toString()) ?? null;
            setChosenVoyage(voyage);
          }}
          allowEnterFill
          options={[
            ...voyages.map((v) => ({
              id: v.id,
              label: v.name + ` - (id: ${v.id})`,
            })),
            ...voyages.map((v) => ({
              id: v.id,
              label: ":" + v.id,
            })),
          ]}
        >
          <input
            placeholder="Type voyage name here..."
            className="w-full p-4 bg-white bg-opacity-90"
            onChange={(e) => setQuery(e.target.value)}
          />
        </Hint>
      </div>

      {imageLoaded &&
        guessedVoyage &&
        guessedVoyage.departures.length === 0 && (
          <h4 className="mb-2">
            Unfortunately, this voyage has no availability. Please try another.
          </h4>
        )}

      <PrimaryButton
        onClick={
          chosenVoyage ? () => onVoyageSelected(chosenVoyage) : undefined
        }
        isDisabled={!chosenVoyage}
      >
        Next
      </PrimaryButton>
    </div>
  );
};

export default VoyageSelector;

"use client";
import FlexColumn from "@/components/flex_column";
import FlexWrap from "@/components/flex_wrap";
import Listing from "@/components/listing";
import Image from "next/image";
import { useState } from "react";

const content = [
  "Originally built in 1933 with additions in 1982 and 1991, this improved family residential home is situated on 0.77 acres of land.",
  "3 Beds - 2 Baths - 1687 Square Feet",
  "2 Door Garage - 1024 Square Feet",
  "Zoned for Shady Hill Elementary, Osceola Middle and Belleview High",
  "$180,000 - Call Bill Bell @ (352) 266 5076",
];

const button =
  "w-20 p-3 border border-red-100 dark:border-red-900 hover:bg-red-100 dark:hover:bg-red-900";

export default function Home() {
  const [index, setIndex] = useState(1);

  return (
    <FlexColumn>
      <Listing title="1720 SE 48th Street, Ocala, FL 34480" content={content}>
        <FlexColumn>
          <Image
            src={`/1720/${index}.webp`}
            alt="1720 SE 48th Street, Ocala, FL 34480"
            height={512}
            width={512}
            priority
          />
          <FlexWrap>
            <button
              className={button}
              onClick={() => setIndex(decrement(index))}
            >
              Previous
            </button>
            <p className="w-20 text-center">{index} / 12</p>
            <button
              className={button}
              onClick={() => setIndex(increment(index, 12))}
            >
              Next
            </button>
          </FlexWrap>
        </FlexColumn>
      </Listing>
    </FlexColumn>
  );
}

const decrement = (index: number) => {
  if (index > 1) return index - 1;
  return index;
};

const increment = (index: number, max: number) => {
  if (index < max) return index + 1;
  return index;
};

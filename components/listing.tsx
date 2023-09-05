"use client";
import React, { useState } from "react";

type Props = {
  title?: string;
  content?: string[];
  hidden?: boolean;
  children?: React.ReactNode;
};

export default function InfoCard(props: Props) {
  const [hidden, setHidden] = useState(props.hidden);

  return (
    <div className="w-full border border-gray-500 bg-stone-200 p-3 opacity-90 dark:bg-stone-800">
      <div
        className="flex justify-center gap-x-3"
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <h2 className="flex pb-2 text-2xl font-[600]">{props.title}</h2>
        <p className="text-sm">(Click to show/hide)</p>
      </div>
      {!hidden &&
        props.content?.map((item, index) => (
          <div key={index} className="flex w-full items-center justify-center">
            <p className="text-md w-full max-w-[90ch] py-2 font-serif">
              {item}
            </p>
          </div>
        ))}
      {!hidden && props.children}
    </div>
  );
}

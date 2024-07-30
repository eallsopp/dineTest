import React from "react";

const ImageScrollButtons = ({
  currentImg,
  setCurrentImg,
  data,
}: {
  currentImg: number;
  setCurrentImg: (prev: number) => void;
  data: any[];
}) => {
  return (
    <div className="flex justify-center mt-3">
      <button
        className={`border px-4 py-2 font-bold ${currentImg === 0 && "opacity-50"}`}
        disabled={currentImg === 0}
        onClick={() => setCurrentImg((prev: any) => prev - 1)}
      >
        {"<"}
      </button>
      <button
        className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && "opacity-50"}`}
        disabled={currentImg === data.length - 1}
        onClick={() => setCurrentImg((prev: any) => prev + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageScrollButtons;

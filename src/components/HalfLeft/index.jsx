import Carrousel from "../Carrousel";

export default function HalfLeft() {
  return (
    <div className="halfCover h-full w-[50%]">
      <div className="bg-[#de263d] bg-opacity-[0.85] h-full w-full">
        <Carrousel />
      </div>
    </div>
  );
}

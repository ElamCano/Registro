export default function HalfRight() {
  const showImage = () => {
    document.getElementById("blur").className =
      "w-full h-full bg-[#f5f5f5] bg-opacity-75";
  };

  const quitImage = () => {
    document.getElementById("blur").className =
      "w-full h-full bg-[#f5f5f5] transition ease-in-out duration-1000";
  };
  return (
    <div
      className="halfCoverRight w-[50%]"
      onMouseOver={showImage}
      onMouseOut={quitImage}
    >
      <div
        className="w-full h-full bg-[#f5f5f5] transition ease-in-out duration-1000"
        id="blur"
      />
    </div>
  );
}

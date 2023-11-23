export default function Carrousel() {
  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "isAutoPlay": true
      }'
      className="relative  hidden xl:flex xl:flex-col xl:justify-center xl:h-full"
    >
      <div className="hs-carousel relative text-[#f5f5f5] font-semibold overflow-hidden min-h-[250px] w-[70%] rounded-lg">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full p-6">
              <span className="self-center text-md transition duration-1000">
                "Excelente ambiente comunitario: Randori se siente como una gran
                familia donde todos se apoyan mutuamente para alcanzar sus
                objetivos"
                <p className="mt-2 text-end">-Atleta Randori</p>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full  p-6">
              <span className="self-center text-md transition duration-1000">
                "Los entrenadores son increíblemente conocedores y están
                comprometidos con el éxito de cada miembro."
                <p className="mt-2 text-end">-Martin Scorcese</p>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full p-6">
              <span className="self-center text-md transition duration-1000">
                "Las clases ofrecen una amplia gama de entrenamientos
                desafiantes que mantienen la rutina emocionante y te motivan a
                superar tus límites."
                <p className="mt-2 text-end">-Elam Cano</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-[40%] start-0 end-0 space-x-2 w-[70%]">
        <span className="hs-carousel-active:bg-[#f5f5f5] hs-carousel-active:opacity-100 w-3 h-3 bg-gray-300 opacity-40 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-[#f5f5f5] hs-carousel-active:opacity-100 w-3 h-3 bg-gray-300 opacity-40 rounded-full cursor-pointer"></span>
        <span className="hs-carousel-active:bg-[#f5f5f5] hs-carousel-active:opacity-100 w-3 h-3 bg-gray-300 opacity-40 rounded-full cursor-pointer"></span>
      </div>
    </div>
  );
}

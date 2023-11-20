export default function Inputform({ placeholder, imagen, type = "text", id }) {
  return (
    <div class="flex relative mt-2">
      <input
        type={type}
        id="hs-floating-input-email-value"
        className="peer h-10 px-2 py-6 bg-[#f5f5f5] text-gray-600 block w-full text-sm border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none"
        placeholder="you@email.com"
      />
      <label
        for="hs-floating-input-email-value"
        className="absolute text-gray-400 top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-[10px]
    peer-focus:p-2.5
    peer-focus:-translate-y-4
    peer-focus:-translate-x-3.5
    peer-focus:text-gray-400
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-4
    peer-[:not(:placeholder-shown)]:-translate-x-3.5
    peer-[:not(:placeholder-shown)]:text-[10px]
    peer-[:not(:placeholder-shown)]:p-2.5

    peer-[:not(:placeholder-shown)]:text-gray-400"
      >
        {placeholder}
      </label>
      <img
        src={imagen}
        alt={imagen}
        className="w-4 align-text-bottom border-b border-gray-300"
      />
    </div>
  );
}

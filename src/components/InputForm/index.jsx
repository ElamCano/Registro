export default function Inputform({ placeholder, imagen, type, id }) {
  return (
    <div class="relative mt-2">
      <input
        type="email"
        id="hs-floating-input-email-value"
        className="peer h-10 px-2 py-6 bg-[#f5f5f5] block w-full text-sm border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none
  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2"
        placeholder="you@email.com"
      />
      <label
        for="hs-floating-input-email-value"
        className="absolute text-gray-500 top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-[10px]
    peer-focus:p-2.5
    peer-focus:-translate-y-4
    peer-focus:-translate-x-3.5
    peer-focus:text-gray-500
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500"
      >
        {placeholder}
      </label>
    </div>
  );
}

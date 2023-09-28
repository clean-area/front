import { Dispatch, SetStateAction } from "react";

export default function SearchInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="w-[308px] h-[36px] ">
      <div className="relative h-10 w-full min-w-[200px] ">
        <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[15.24px] cursor-pointer"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
        </div>
        <input
          className="h-full w-full rounded-[50px] bg-[#F8F8FB] px-3 py-2.5 pl-4 text-[15px] text-[#8E8E93] !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="어떤 정책을 찾고 있나요?"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

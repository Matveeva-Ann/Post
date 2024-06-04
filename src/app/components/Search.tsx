'use client';

import { useRef, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { GoSearch } from 'react-icons/go';

interface SearchProps {
  setSearchParam: Dispatch<SetStateAction<string>>;
}

export default function Search({ setSearchParam }: SearchProps) {
  const [searchText, setSearchText] = useState('');
  const inputData = useRef<HTMLInputElement>(null);

  function handleSearch() {
    if (inputData.current) {
      const searchData = inputData.current.value;
      setSearchText(inputData.current.value);
      setSearchParam(inputData.current.value);
    }
  }

  return (
    <>
      <div className="w-full mb-6 flex justify-between">
        <label htmlFor="email" className="w-full relative text-gray-400 focus-within:text-gray-600 block">
          <GoSearch className='absolute pointer-events-none w-6 h-6 text-gray-400 top-1/4 left-2'/>
          <input
            ref={inputData}
            className="mr-5 w-full p-2 pl-10 border border-black dark:border-white rounded-lg form-input text-slate-950 dark:text-white focus:outline-none focus:border-blue-500"
            type="text"
            onChange={handleSearch}
            value={searchText}
          />
        </label>
      </div>
    </>
  );
}

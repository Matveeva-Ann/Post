'use client';

import { useRef, useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { GoSearch } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';

interface SearchProps {
  setSearchParam: Dispatch<SetStateAction<string>>;
}

export default function Search({ setSearchParam }: SearchProps) {
  const [inputValue, setInputValue] = useState('');
  const inputData = useRef<HTMLInputElement>(null);

  function handleSearch() {
    if (inputData.current) {
      const searchData = inputData.current.value;
      setInputValue(searchData);

      debounce((searchData: string) => {
        setSearchParam(searchData);
      })(searchData);
    }
  }

  function debounce (callBack: (arg: string) => void) {
    return (arg: string) =>{
      setTimeout(()=>{
        setSearchParam(arg)
      }, 500)
    }
  }

  function reset() {
    setSearchParam('');
    setInputValue('');
  }

  return (
    <>
      <div className="w-full mb-6 flex justify-between">
        <label htmlFor="email" className="w-full relative text-gray-400 focus-within:text-gray-600 block">
          <GoSearch className="absolute pointer-events-none w-6 h-6 text-gray-400 top-1/4 left-2" />
          <input
            ref={inputData}
            className="mr-5 nl-5 w-full p-2 pl-10 border bg-white dark:bg-stone-900 border-black dark:border-white rounded-lg form-input text-slate-950 dark:text-white focus:outline-none"
            type="search"
            onChange={handleSearch}
            value={inputValue}
          />
          <RxCross2
            onClick={() => reset()}
            className="absolute w-6 h-6 text-gray-400 top-1/4 right-2 cursor-pointer bg-white dark:bg-stone-900"
          />
        </label>
      </div>
    </>
  );
}

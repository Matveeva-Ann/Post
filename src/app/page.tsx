'use client';

import { useState } from 'react';
import Articles from './components/Articles';
import Search from './components/Search';

export default function Home() {
  const [searchParam, setSearchParam ] = useState('');


  return (
   
      <main className='w-10/12 mx-auto mb-10'>
        <Search setSearchParam={setSearchParam}></Search>
        <Articles searchParam={searchParam}></Articles>
      </main>
    
  );
}

'use client';

import { useState } from 'react';
import Search from './components/Search';
import dynamic from 'next/dynamic';

const ArticlesComponent = dynamic(() => import('./components/Articles'))


export default function Home() {
  const [searchParam, setSearchParam] = useState('');

  return (
    <main className="w-10/12 mx-auto mb-10">
      <Search setSearchParam={setSearchParam}></Search>
      <ArticlesComponent searchParam={searchParam}></ArticlesComponent>
    </main>
  );
}

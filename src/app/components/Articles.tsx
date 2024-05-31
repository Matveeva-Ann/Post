'use client';
import { useGetArticlesQuery } from '@/redux/articles';
import ArticleCard from './ArticleCard';
import { Article } from '@/types/Article';
import Btn from './Btn';
import { useEffect, useState } from 'react';

export default function Articles() {
  const { data, isSuccess } = useGetArticlesQuery([]);
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (data) {
      setArticles(data.slice((count - 1) * 8, count * 8));
    }
  }, [count, data]);

  function handleClick(direction: string) {
    if (direction === 'next' && data.length >= count * 8) {
      setCount(prevState => prevState + 1);
    } else if (direction === 'prev' && count > 1) {
      setCount(prevState => prevState - 1);
    }
  }
  
  return (
    <div className='w-10/12 mx-auto mb-10'>
      {isSuccess && (
        <div className='flex justify-between'>
          <Btn onClick={() => handleClick('prev')}>Prev page</Btn>
          <Btn onClick={() => handleClick('next')}>Next page</Btn>
        </div>
      )}
      <div className="grid grid-cols-4 gap-6">
        {isSuccess &&
          articles.map((article: Article, index: number) => {
            return <ArticleCard articleData={article} key={index}></ArticleCard>;
          })}
      </div>
    </div>
  );
}

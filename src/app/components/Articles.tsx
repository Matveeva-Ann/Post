'use client';
import { useGetArticlesQuery } from '@/redux/articles';
import ArticleCard from './ArticleCard';
import { Article } from '@/types/Article';
import Btn from './Btn';
import { useCallback, useEffect, useState } from 'react';

enum Direction {
  Next = 'next',
  Prev = 'prev',
}
interface ArticlesProps {
  searchParam: string;
}

export default function Articles({ searchParam }: ArticlesProps) {
  const { data, isSuccess } = useGetArticlesQuery([]);
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (data) {
      setArticles(data.slice((count - 1) * 8, count * 8));
    }
  }, [count, data]);

  const filterArticles = useCallback(() => {
    if (data) {
      const result = data.filter((item: Article) => item.authorName.toLowerCase().includes(searchParam.toLowerCase()));
      setArticles(result);
    }
  }, [searchParam, data, setArticles]);

  useEffect(() => {
    filterArticles();
  }, [searchParam, filterArticles]);

  function handleClick(direction: string) {
    if (direction === Direction.Next && data.length >= count * 8) {
      setCount(prevState => prevState + 1);
    } else if (direction === Direction.Prev && count > 1) {
      setCount(prevState => prevState - 1);
    }
  }

  return (
    <div>
      {isSuccess && (
        <div className="flex justify-between items-center mb-8 text-white">
          <Btn onClick={() => handleClick(Direction.Prev)} disabled={count === 1}>
            Prev page
          </Btn>
          <p className='text-xl'>{count}/{Math.round(data.length/8)}</p>
          <Btn onClick={() => handleClick(Direction.Next)} disabled={data.length <= count * 8}>
            Next page
          </Btn>
        </div>
      )}
      <div className="grid grid-cols-4 gap-6">
        {isSuccess &&
          articles.map((article: Article, index: number) => {
            return <ArticleCard articleData={article} key={index} articlesPage={count}></ArticleCard>;
          })}
      </div>
    </div>
  );
}

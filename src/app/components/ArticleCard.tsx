import { Article } from '@/types/Article';
import Image from 'next/image';
import Link from 'next/link';
import { formattedDateTime } from '../utils/formattedDateTime';

export interface ArticleCardProps {
  articleData: Article;
  articlesPage: number;
}

export default function ArticleCard({ articleData, articlesPage }: ArticleCardProps) {

  return (
    <Link href={{pathname: `/posts/${articleData.id}`, query: {page: articlesPage}}}>
      <article
        className={`w-full flex flex-col text-black rounded-2xl overflow-hidden bg-white cursor-pointer hover:scale-105 duration-300 shadow shadow-gray-500 dark:bg-black dark:text-white `}
      >
        <div className="relative">
          <Image
            className="rounded-t-2xl w-full object-cover"
            src={articleData.postImage}
            alt={`${articleData.authorName} article`}
            width={500}
            height={300}
            priority={false}
          />
          <div
            className="absolute w-full h-2/5 -bottom-1 bg-shadowGradient dark:bg-shadowGradientDark"
          ></div>
        </div>

        <div className="text-black grow rounded-b-2xl -mt-2 p-5 pb-7 relative dark:text-white">
          <div className="flex items-center gap-3 mb-4">
            <Image className="rounded-full" src={articleData.authorAvatar} alt="Avatar" width={50} height={50} />
            <p className="font-medium text-xl leading-5">{articleData.authorName}</p>
          </div>
          <p className="text-sm text-justify min-h-28">
            {articleData.postText.length > 120 ? `${articleData.postText.slice(0, 120)}...` : articleData.postText}{' '}
          </p>
          <span className="text-sm text-gray-600 absolute bottom-2 right-4">
            {formattedDateTime(articleData.createdAt)}
          </span>
        </div>
      </article>
    </Link>
  );
}

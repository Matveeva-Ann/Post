import { Article } from '@/types/Article';
import Image from 'next/image';
import Link from 'next/link';
import { formattedDateTime } from '../utils/formattedDateTime';
import UserData from './UserData';

export interface ArticleCardProps {
  articleData: Article;
  searchParam: string;
}

export default function ArticleCard({ articleData, searchParam }: ArticleCardProps) {

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <span key={index} style={{ backgroundColor: 'gray' }}>{part}</span> : part
    );
  }; 



  return (
    <>
      <article
        className={`w-full flex flex-col text-black rounded-2xl overflow-hidden bg-white hover:scale-105 duration-300 shadow shadow-gray-500 dark:bg-black dark:text-white `}
      >
        <Link href={`/posts/${articleData.id}`} className="relative">
          <Image
            className="rounded-t-2xl w-full object-cover"
            src={articleData.postImage}
            alt={`${articleData.authorName} article`}
            width={500}
            height={300}
            priority
          />
          <div className="absolute w-full h-2/5 -bottom-1 bg-shadowGradient dark:bg-shadowGradientDark"></div>
        </Link>

        <div className="text-black grow rounded-b-2xl -mt-2 p-5 pb-7 relative dark:text-white">
          <UserData avatar={articleData.authorAvatar} name={articleData.authorName}></UserData>
          <Link href={`/posts/${articleData.id}`}>
            <p className="text-sm text-justify min-h-28">
            {highlightText(articleData.postText, searchParam)}
              {/* {articleData.postText.length > 120 ? `${articleData.postText.slice(0, 120)}...` : articleData.postText} */}
            </p>
          </Link>
          <span className="text-sm text-gray-600 absolute bottom-2 right-4">
            {formattedDateTime(articleData.createdAt)}
          </span>
        </div>
      </article>
    </>
  );
}

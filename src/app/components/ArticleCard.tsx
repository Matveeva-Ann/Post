import { Article } from '@/types/Article';
import Image from 'next/image';
import Link from 'next/link';

export interface ArticleCardProps {
  articleData: Article;
}

export default function ArticleCard({ articleData }: ArticleCardProps) {
  return (
    <Link href={`/posts/${articleData.id}`}>
      <article
        className={`w-full flex flex-col rounded-2xl overflow-hidden bg-white cursor-pointer hover:scale-105 duration-300 shadow shadow-gray-500`}
      >
        <div className="relative">
        <Image
                className="rounded-t-2xl w-full object-cover"
                src={articleData.postImage}
                alt={`${articleData.authorName} article`}
                layout="responsive"
                width={500} 
                height={300} 
            />
          <div
            style={{
              background: 'linear-gradient(0deg, #ffffff 0%, #ffffff 28%, rgba(255,255,255,0) 100%)',
            }}
            className="absolute w-full h-1/3 -bottom-2"
          ></div>
        </div>

        <div className="text-black grow rounded-b-2xl -mt-2 p-5 relative">
          <div className="flex items-center gap-3 mb-4">
            <Image
              className="rounded-full"
              src={articleData.authorAvatar}
              alt="Avatar"
              width={50} 
              height={50} 
            />
            <p className="font-medium text-xl leading-5">{articleData.authorName}</p>
          </div>
          <p className="text-sm text-justify min-h-28">
            {articleData.postText.length > 120 ? `${articleData.postText.slice(0, 120)}...` : articleData.postText}{' '}
          </p>
          <span className="text-sm text-gray-600 absolute bottom-2 right-4">
            {new Date(articleData.createdAt)
                .toLocaleDateString('uk-UA', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })
                .replace(/\./g, '.')}
          </span>
        </div>
      </article>
    </Link>
  );
}

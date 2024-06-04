'use client';

import { formattedDateTime } from '@/app/utils/formattedDateTime';
import { useGetArticleItemQuery } from '@/redux/articles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { data, isSuccess, error } = useGetArticleItemQuery(params.id);

  return (
    <div className="flex items-center justify-center">
      {isSuccess && !error && (
        <div
          className="w-full bg-cover bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${data.postImage})`, height: 'calc(100vh - 114px)' }}
        >
          <div className="bg-white dark:bg-black dark:text-white rounded-md text-black p-4 z-10 w-6/12 relative">
            <span className="text-sm text-gray-600 absolute top-2 right-4">
              {formattedDateTime(data.createdAt)}
            </span>
            <Image
              style={{ maxHeight: '25vh' }}
              width={50}
              height={50}
              className="w-1/2 float-left mr-4 object-cover"
              src={data.authorAvatar}
              alt="avatar"
            />
            <p className="font-medium text-xl leading-5 mt-8 mb-4">{data.authorName}</p>
            <p>{data.postText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

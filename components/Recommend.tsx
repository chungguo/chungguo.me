import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Post } from 'chungguo/types/post';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([
  Autoplay,
  Pagination,
]);

export default function Recommend(props: {
  posts: Post[]
}) {
  const { posts = [] } = props;


  return (
    <article className="w-full">
      <Swiper 
        className="h-96 relative"
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ 
          delay: 3000
        }} 
      >
        {
          posts.map((post, idx) => {
            const { meta, slug } = post;
            const { title, cover, date , tag = []} = meta;
            return (
              <SwiperSlide className="w-full h-full" key={post.slug}>
                <img src={cover} className="block w-full h-full" alt="cover" style={{
                  objectFit: 'cover'
                }} />
                <article className="absolute top-0 left-0 bottom-0 right-0">
                  <section className="m-auto px-6 py-10 w-full md:w-1/2 lg:w-2/3 h-full flex flex-col">
                    <div className="flex-grow">
                      <span className="px-2 py-1 bg-blue-500 text-white text-xs">{idx + 1}</span>
                      <span className="text-white ml-2 text-sm">推荐</span>
                    </div>
                    <div>
                      <i className="block text-sm mb-2 text-white">{tag.join(',')}</i>
                      <Link as={`/${slug}`} href="/[slug]" passHref>
                        <a className="cursor-pointer">
                          <h1 className="line-clamp-2 text-2xl text-white font-semibold">{title}</h1>
                        </a>
                      </Link>
                      <time dateTime={date} className="text-gray-200 text-sm">{date}</time>
                    </div>
                  </section>
                </article>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </article>
  )
}
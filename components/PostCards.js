import Link from 'next/link';

function PostCard(props) {
  const { slug, title, date, coverImage, excerpt } = props;

  return (
    <section>
      <Link as={`/${slug}`} href="/[slug]">
        <section className="cursor-pointer">
          <img src={coverImage} alt={title} className="object-cover rounded-3xl w-full h-64" />
          <h3 className="line-clamp-2 text-2xl font-bold mt-4">{title}</h3>
        </section>
      </Link>
      <time dateTime={date}>{date}</time>
      <p className="line-clamp-3">{excerpt}</p>
    </section >
  )
}

export default function PostCards(props) {
  const { posts } = props;

  if (!Array.isArray(posts) || posts.length < 1) {
    return null;
  }

  return (
    <section className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12 my-12">
      {
        posts.map(post => {
          const { slug } = post;
          return (
            <PostCard key={slug} {...post} />
          )
        })
      }
    </section>
  );
}
export default async function NewsDetailPage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-extrabold text-primary-dark">Bài viết</h1>
      <p className="mt-3 text-slate-600">
        Nội dung chi tiết cho bài viết <span className="font-semibold">{slug}</span>{" "}
        sẽ được xây dựng sau.
      </p>
    </main>
  );
}

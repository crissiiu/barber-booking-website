export default async function ProductDetailPage(
  props: PageProps<"/products/[slug]">,
) {
  const { slug } = await props.params;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-extrabold text-primary-dark">
        Chi tiết sản phẩm
      </h1>
      <p className="mt-3 text-slate-600">
        Nội dung chi tiết cho sản phẩm <span className="font-semibold">{slug}</span>{" "}
        sẽ được xây dựng sau.
      </p>
    </main>
  );
}

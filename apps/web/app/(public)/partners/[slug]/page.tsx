export default async function PartnerDetailPage(
  props: PageProps<"/partners/[slug]">,
) {
  const { slug } = await props.params;

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-extrabold text-primary-dark">
        Chất lượng & Uy tín
      </h1>
      <p className="mt-3 text-slate-600">
        Trang thông tin chi tiết <span className="font-semibold">{slug}</span>{" "}
        sẽ được hoàn thiện sau.
      </p>
    </main>
  );
}

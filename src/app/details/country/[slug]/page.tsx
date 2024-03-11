export default function Details({ params }: { params: { slug: string } }) {
  return <div>Page {params.slug}</div>;
}

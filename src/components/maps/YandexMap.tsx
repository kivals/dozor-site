export function YandexMap({
  query,
  className,
}: {
  query: string;
  className?: string;
}) {
  const src = `https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent(
    query,
  )}&z=15`;

  return (
    <iframe
      title={`Карта: ${query}`}
      src={src}
      loading="lazy"
      className={className}
      style={{ border: 0 }}
    />
  );
}

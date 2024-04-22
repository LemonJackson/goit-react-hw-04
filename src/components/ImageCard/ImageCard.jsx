import css from "./ImageCard.module.css";
export default function ImageCard({ item, openModal }) {
  return (
    <img
      className={css.img}
      src={item.urls.small}
      alt={item.slug}
      onClick={() => {
        openModal(item.urls.regular);
      }}
    />
  );
}

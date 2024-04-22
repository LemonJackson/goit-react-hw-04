import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={css.btn} onClick={onClick} type="button">
      Load more
    </button>
  );
}

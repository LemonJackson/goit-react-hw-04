import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function Searchbar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    const { query } = form.elements;

    if (query.value.trim() === "") {
      toast.error("Please enter search name.", { position: "top-right" });
      return;
    }

    onSearch(query.value.trim());
    form.reset();
  };

  return (
    <div className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn}>
          <BsSearch className={css.icon} />
        </button>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="Search image..."
        />
        <Toaster />
      </form>
    </div>
  );
}

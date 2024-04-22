import { LineWave } from "react-loader-spinner";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id + Date.now()}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

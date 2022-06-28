/* eslint-disable no-return-assign */
import './category.css';

export default function Category({ categories }) {
  let categoriesNew = '';

  if (categories && categories.length > 0 && typeof categories !== 'string') {
    categories.map((item) => (categoriesNew += `${item?.name} >`));
  } else {
    categoriesNew += `${categories} >`;
  }

  return (
    <div className="containerCatergory">
      <span>{categoriesNew.substring(0, categoriesNew.length - 1)}</span>
    </div>
  );
}

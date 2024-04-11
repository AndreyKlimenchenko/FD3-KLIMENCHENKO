import { useEffect, useState } from "react";
import "./Pagination.css";

export function Pagination({ active, setActive, pages }) {
  const pageNumberLimit = 5;

  const arrayEmpty = [...new Array(pages)].map((x, index) => index);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(pageNumberLimit);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (index) => {
    if (index === maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit - 1);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit - 1);
    }
    setActive(index);
  };

  const next = () => {
    if (active === arrayEmpty?.length) return;
    if (active + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    if ((active - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    if (active - 1 > pageNumberLimit) {
      setmaxPageNumberLimit(active);
      setminPageNumberLimit(active - pageNumberLimit);
    }

    if (active - 1 <= pageNumberLimit) {
      setmaxPageNumberLimit(pageNumberLimit);
      setminPageNumberLimit(0);
    }
    setActive(active - 1);
  };

  useEffect(() => {
    setmaxPageNumberLimit(pageNumberLimit);
  }, [pageNumberLimit]);

  return (
    <div className="pagination">
      <button
        className="paginationButton"
        onClick={prev}
        disabled={active === 1}
      >
        prev
      </button>
      <div className="paginationButtons">
        {arrayEmpty
          ?.slice(minPageNumberLimit, maxPageNumberLimit)
          .map((item) => (
            <button
              onClick={() => handleClick(item + 1)}
              key={item}
              className={
                active === item + 1
                  ? "paginationButton paginationButtonActive"
                  : "paginationButton"
              }
            >
              {item + 1}
            </button>
          ))}
        {pages > maxPageNumberLimit && (
          <>
            <span className="">...</span>
            <button
              onClick={() => handleClick(pages)}
              className={
                active === pages
                  ? "paginationButton paginationButtonActive"
                  : "paginationButton"
              }
            >
              {pages}
            </button>
          </>
        )}
      </div>
      <button
        className="paginationButton"
        onClick={next}
        disabled={active === arrayEmpty?.length}
      >
        next
      </button>
    </div>
  );
}

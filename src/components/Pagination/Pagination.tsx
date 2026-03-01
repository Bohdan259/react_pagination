import { getPages } from '../../utils';

type Props = {
  total: number;
  getPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
export const Pagination: React.FC<Props> = ({
  total,
  getPerPage,
  currentPage,
  onPageChange,
}) => {
  const pages = getPages(total, getPerPage);
  const lastPage = pages[pages.length - 1];

  return (
    <ul className="pagination">
      <li className={currentPage === 1 ? 'page-item disabled' : 'page-item'}>
        <a
          onClick={() => onPageChange(currentPage - 1)}
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1 ? 'true' : 'false'}
        >
          «
        </a>
      </li>
      {pages.map(number => (
        <li
          key={number}
          className={currentPage === number ? 'page-item active' : 'page-item'}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href="#1"
            onClick={() => onPageChange(number)}
          >
            {number}
          </a>
        </li>
      ))}
      <li
        className={
          currentPage === lastPage ? 'page-item disabled' : 'page-item'
        }
      >
        <a
          onClick={() => onPageChange(currentPage + 1)}
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === lastPage ? 'true' : 'false'}
        >
          »
        </a>
      </li>
    </ul>
  );
};

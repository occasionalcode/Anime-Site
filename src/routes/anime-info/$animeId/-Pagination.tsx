import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { useAnimeInfoStore } from "@/stores/animeInfoStore";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

type UsePaginationProps = {
  pages: number;
  onPageChange: (page: number) => void;
};

export default function UsePagination({
  pages,
  onPageChange,
}: UsePaginationProps) {
  const { characterCurrentPagination: characterPagination } =
    useAnimeInfoStore();
  const { items } = usePagination({
    count: pages,
    page: characterPagination, // Track the current page
  });

  return (
    <nav className="text-white">
      <List className="flex justify-between gap-5">
        {items.map(({ page, type, selected, ...item }, index) => {
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            return <li key={index}>…</li>;
          } else if (type === "page") {
            return (
              <li key={index}>
                <button
                  type="button"
                  style={{
                    fontWeight: selected ? "bold" : undefined,
                  }}
                  {...item}
                  onClick={() => onPageChange(page!)} // Handle page change
                >
                  {page}
                </button>
              </li>
            );
          } else if (type === "previous" && pages > 1) {
            return (
              <li key={index}>
                <button
                  type="button"
                  {...item}
                  onClick={() => onPageChange(characterPagination - 1)}
                >
                  Previous
                </button>
              </li>
            );
          } else if (type === "next" && pages > 1) {
            return (
              <li key={index}>
                <button
                  type="button"
                  {...item}
                  onClick={() => onPageChange(characterPagination + 1)}
                >
                  Next
                </button>
              </li>
            );
          }

          return null;
        })}
      </List>
    </nav>
  );
}

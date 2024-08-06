import { createFileRoute } from "@tanstack/react-router";
import AnimeInfo from "./-AnimeInfoDashboard";

export const Route = createFileRoute("/anime-info/$animeId/")({
  component: () => <AnimeInfoIndex />,
});

function AnimeInfoIndex() {
  const { animeId } = Route.useParams();
  return <AnimeInfo id={animeId} />;
}

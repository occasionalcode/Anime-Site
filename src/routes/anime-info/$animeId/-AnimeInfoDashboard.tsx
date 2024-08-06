import { useFetchAnimeInfo } from "@/api/animeinfo-fetch";

type AnimeInfoProps = {
  id: string;
};
export default function AnimeInfo({ id }: AnimeInfoProps) {
  const { data, isLoading, error } = useFetchAnimeInfo(id);
  return (
    <div>
      <p>{`${data?.rating.anilist}`}</p>
    </div>
  );
}

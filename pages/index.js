import SongTable from "../components/song-table";
import Content from "../components/Content";

export default function Home() {
  return (
    <div className="p-4 flex flex-col bg-spotify text-white">
      <SongTable />
      <Content />
    </div>
  );
}

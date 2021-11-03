import { HeartIcon, PlayIcon } from "@heroicons/react/outline";

const SongTable = () => {
  return (
    <table className="shadow-md bg-black text-left text-gray-400 text-xs rounded-md drop-shadow-sm">
      <tr className="border-b-2 border-gray-900">
        <th className="px-2 py-4 w-1"></th>
        <th className="px-2 py-4">Title</th>
        <th className="px-2 py-4">Covered By</th>
        <th className="px-2 py-4">Duration</th>
        <th className="px-2 py-4">Sang On</th>
        <th className="px-2 py-4 w-1"></th>
      </tr>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </table>
  );
};

const Item = () => {
  return (
    <tr className="font-light hover:text-white transition-colors">
      <td className="p-2">
        <PlayIcon className="w-5 h-5 cursor-pointer hover:scale-110" />
      </td>
      <td className="p-2">Title</td>
      <td className="p-2">Covered By</td>
      <td className="p-2">Duration</td>
      <td className="p-2">Sang On</td>
      <td className="p-2">
        <HeartIcon className="w-5 h-5 hover:fill-current cursor-pointer" />
      </td>
    </tr>
  );
};
export default SongTable;

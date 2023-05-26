import { AiFillFilePdf } from "react-icons/ai";

interface ResourceCardProps {
  name: string;
  size: string;
}

const ResourceCard = ({ name, size }: ResourceCardProps) => {
  return (
    <a href={`/static/pdf/${name}`}>
      <div className="relative flex flex-col items-center gap-4 bg-white shadow-2xl shadow-gray-200 rounded-lg p-10 mb-10 lg:mb-0 mx-4 lg:mx-0 cursor-pointer group">
        <div className="absolute top-2 right-2">{size}</div>
        <div>
          <AiFillFilePdf size={40} className="text-yellow-500" />
        </div>
        <div>{name}</div>
      </div>
    </a>
  );
};

export default ResourceCard;

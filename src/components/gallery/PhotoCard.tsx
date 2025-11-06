interface Photo {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  location: string;
}

interface PhotoCardProps {
  photo: Photo;
}

export const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 relative group">
      <a
        href={photo.imageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className="w-full h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${photo.imageUrl})` }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
          <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
          <p className="text-sm text-gray-200">
            <i className="far fa-calendar-alt mr-1"></i> {photo.date} |{" "}
            {photo.location}
          </p>
        </div>
      </a>
    </div>
  );
};

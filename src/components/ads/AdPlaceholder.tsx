interface AdPlaceholderProps {
  type: "banner-horizontal" | "banner-large" | "in-feed";
  className?: string;
}

export const AdPlaceholder = ({ type, className = "" }: AdPlaceholderProps) => {
  const getAdDimensions = () => {
    switch (type) {
      case "banner-horizontal":
        return { height: "h-24", text: "Espacio para Google AdSense (728x90)" };
      case "banner-large":
        return {
          height: "h-32",
          text: "Espacio para Google AdSense (970x250)",
        };
      case "in-feed":
        return {
          height: "h-48",
          text: "Espacio para Google AdSense (300x250)",
        };
      default:
        return { height: "h-24", text: "Espacio para anuncio" };
    }
  };

  const { height, text } = getAdDimensions();

  return (
    <div
      className={`w-full ${height} bg-[#E0E0E0] border border-dashed border-[#A0A0A0] text-[#606060] flex items-center justify-center text-center font-semibold text-sm rounded-lg ${className}`}
    >
      {text}
    </div>
  );
};

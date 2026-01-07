const StaticTechIcon = ({ model }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black-100">
      {model.imgPath && (
        <img
          src={model.imgPath}
          alt={model.name}
          className="w-24 h-24 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default StaticTechIcon;

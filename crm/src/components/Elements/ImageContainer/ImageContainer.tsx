import React from "react";

interface IImageContainer {
  image: any;
  width?: string;
  height?: string;
  alt?: string;
  className?: string;
}

const ImageContainer: React.FC<IImageContainer> = ({
  image,
  width = "20px",
  height = "20px",
  alt = "image",
  className,
}) => {
  return (
    <div className={className} style={{ width, height, overflow: "hidden" }}>
      <img
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        src={image}
        alt={alt}
      />
    </div>
  );
};

export default ImageContainer;

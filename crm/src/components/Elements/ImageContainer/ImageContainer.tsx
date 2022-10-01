import React from "react";

interface IImageContainer {
  image: string;
  width?: string;
  height?: string;
  padding?: string;
  imgWidth?: string;
  imgHeight?: string;
  overflow?: string;
  objectFit?: string;
  alt?: string;
  className?: string;
}

const ImageContainer: React.FC<IImageContainer> = ({
  image,
  width = "20px",
  height = "20px",
  imgWidth = "100%",
  imgHeight = "100%",
  objectFit = "contain",
  overflow = "hidden",
  alt = "image",
  className,
}) => {
  return (
    <div className={className} style={{ width, height, overflow }}>
      <img
        style={{ width: imgWidth, height: imgHeight, objectFit: "contain" }}
        src={image}
        alt={alt}
      />
    </div>
  );
};

export default ImageContainer;

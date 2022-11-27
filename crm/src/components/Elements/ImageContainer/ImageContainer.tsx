import React from 'react';
import Box from '../Box/Box';
type typeOverflow = 'auto' | 'hidden' | 'scroll';
type typeFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

interface IImageContainer {
  image: string;
  width?: string;
  height?: string;
  padding?: string;
  imgWidth?: string;
  imgHeight?: string;
  overflow?: typeOverflow;
  alt?: string;
  className?: string;
  typography?: string;
  orientationTypography?: string;
}

const ImageContainer: React.FC<IImageContainer> = ({
  image,
  width = '20px',
  height = '20px',
  imgWidth = '100%',
  imgHeight = '100%',
  overflow = 'hidden',
  alt = 'image',
  className,
  typography,
  orientationTypography,
}) => {
  return (
    <Box
      className={className}
      width={width}
      height={height}
      overflow={overflow}
      display="flex"
      align="center"
      flexDirection={orientationTypography === 'left' ? 'row' : 'row-reverse'}
      gap="3px"
      p="0 10px">
      <img
        style={{ width: imgWidth, height: imgHeight, objectFit: 'contain' }}
        src={image}
        alt={alt}
      />
      {typography ? typography : ''}
    </Box>
  );
};

export default ImageContainer;

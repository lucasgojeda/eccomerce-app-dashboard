import React, { useState, useEffect } from "react";

import Cropper from "react-easy-crop";

import { Box, Button } from "@mui/material";
import Slider from '@mui/material/Slider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import getCroppedImg from "./cropImage";

import "../../../styles/components/ui/imageCrop/_imageCropDialog.scss";


const aspectRatios = [
  { value: 4 / 3, text: "4/3" },
  { value: 16 / 9, text: "16/9" },
  { value: 1 / 2, text: "1/2" },
];

const ImageCropDialog = ({
  id,
  imageUrl,
  cropInit,
  zoomInit,
  aspectInit,
  onCancel,
  setCroppedImageFor,
  resetImage,
}) => {
  if (zoomInit == null) {
    zoomInit = 1;
  }
  if (cropInit == null) {
    cropInit = { x: 0, y: 0 };
  }
  if (aspectInit == null) {
    aspectInit = aspectRatios[0];
  }
  const [zoom, setZoom] = useState(zoomInit);
  const [crop, setCrop] = useState(cropInit);
  const [aspect, setAspect] = useState(aspectInit);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);


  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const xl = useMediaQuery(theme.breakpoints.down('xl'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const onAspectChange = (e) => {
    const value = e.target.value;
    const ratio = aspectRatios.find((ratio) => ratio.value == value);
    setAspect(ratio);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onCrop = async (e) => {
    e.preventDefault();
    const croppedImageUrl = await getCroppedImg(imageUrl, croppedAreaPixels);
    setCroppedImageFor(id, crop, zoom, aspect, croppedImageUrl);
  };

  const onResetImage = () => {
    resetImage(id);
  };

  return (
    <Box className='mainImageCropContainer'>

      <div className="crop-container">
        <Cropper
          image={imageUrl}
          zoom={zoom}
          crop={crop}
          aspect={aspect.value}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onCropComplete={onCropComplete}
        />
      </div>

      <div className="controls">

        <div className="controls-upper-area">

          <Slider
            className="slider"
            defaultValue={1}
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => {
              onZoomChange(e.target.value);
            }}
          />
        </div>

        <div className="button-area">
          <Button variant="outlined" onClick={onCancel}>Cancel</Button>
          <Button variant="outlined" onClick={onResetImage}>Reset</Button>
          <Button variant="outlined" onClick={onCrop}>Crop</Button>
        </div>

      </div>
    </Box >
  );
};

export default ImageCropDialog;

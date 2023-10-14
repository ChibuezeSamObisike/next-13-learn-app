import React from "react";

const PhotoDetailPage = ({
  params: { photoId },
}: {
  params: { photoId: number };
}) => {
  return <div>PhotoDetailPage {photoId}</div>;
};

export default PhotoDetailPage;

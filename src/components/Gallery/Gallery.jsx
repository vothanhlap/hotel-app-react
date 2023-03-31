import React from "react";
import HeadTile from "../../common/HeadTile/HeadTile";
import Card from "./Card";
import GalleryData from "./GalleryData";
import "./Gallery.css"
const Gallery = () => {
  return (
    <>
      <HeadTile />
      
      <section className="gallery top">
        <div className="full_container grid">
          {GalleryData.map((value) => {
            return <Card images={value.img} title={value.title}/>;
          })}      
        </div>
      </section>
    </>
  );
};

export default Gallery;

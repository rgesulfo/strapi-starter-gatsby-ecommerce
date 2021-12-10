import React from 'react';
// import { getStrapiMedia } from "../utils/medias";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = (props) => {
  // if (!props.media) {
  //   return <GatsbyImage {...props} />
  // }

  // const { url, alternativeText } = props.media

  // const loader = ({ src }) => {
  //   return getStrapiMedia(src)
  // }

  return (
    <div>
      Image
    </div>
    // <GatsbyImage
    //   loader={loader}
    //   layout="responsive"
    //   objectFit="contain"
    //   width={props.media.width}
    //   height={props.media.height}
    //   src={getImage(url)}
    //   alt={alternativeText || ""}
    // />
  );
}

export default Image;

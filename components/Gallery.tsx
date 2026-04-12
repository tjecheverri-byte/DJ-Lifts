// Server component — reads photos from /public/photos at build/request time.
// To add your photos: drop image files (.jpg, .jpeg, .png, .webp) into
// the /public/photos/ directory and redeploy (or restart dev server).

import fs from "fs";
import path from "path";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  let photos: string[] = [];

  try {
    const photosDir = path.join(process.cwd(), "public", "photos");
    photos = fs
      .readdirSync(photosDir)
      .filter((file) => /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file))
      .sort()
      .map((file) => `/photos/${file}`);
  } catch {
    // Directory empty or no photos yet — GalleryGrid shows placeholder state
    photos = [];
  }

  return <GalleryGrid photos={photos} />;
}

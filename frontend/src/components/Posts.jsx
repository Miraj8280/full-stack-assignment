import { useRef } from "react";
import clsx from "clsx";

import posts from "../utils/data.json";
import { Card } from "./Card";
import useLazyLoad from "../hooks/useLazyLoad";
import { LoadingPosts } from "./LoadingPosts";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

export const Posts = () => {
  const images = posts["data"];
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const slicedData = images.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        resolve(slicedData);
      });
    }, 800);
  };

   const { data, loading } = useLazyLoad({triggerRef, onGrabData});

  return (
    <>
      <div className="grid grid-cols-3 gap-4 content-start">
        {data.map((image) => {
          // eslint-disable-next-line react/jsx-key
          return <Card owner={image["owner"]} imageUrl={image["imageUrl"]} />;
        })}
      </div>
      <div
        ref={triggerRef}
        className={clsx("trigger", { visible: loading })}
      >
        <LoadingPosts />
      </div>
    </>
  );
};

import posts from "../utils/data.json"
import { Card } from "./Card";

export const Posts = () => {
    const data = posts["data"];
  return (
    <>
      <div className="grid grid-cols-3 gap-4 content-start">
        {
          data.map(image => {
            // eslint-disable-next-line react/jsx-key
            return <Card owner={image["owner"]} imageUrl={image["imageUrl"]} />
          })
        }
      </div>
    </>
  )
}

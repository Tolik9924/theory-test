import { DEFAULT_COLLECTIONS_QUESTION } from "../../constants/collections";
import { ItemCollection } from "../item-collection/ItemCollection";

export const Collections = () => {
  const questions = DEFAULT_COLLECTIONS_QUESTION;

  console.log("COLLECTIONS: ", questions);

  return (
    <div>
      {questions.map((collection) => (
        <ItemCollection collection={collection} />
      ))}
    </div>
  );
};

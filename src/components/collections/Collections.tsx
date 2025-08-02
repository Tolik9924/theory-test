import { useState } from "react";
import { DEFAULT_COLLECTIONS_QUESTION } from "../../constants/collections";
import { ItemCollection } from "../item-collection/ItemCollection";

import styles from "./collection.module.css";
import { QuestionDetails } from "../question-details/QuestionDetails";

const DEFAULT_COLLECTION = {
  id: "",
  title: "",
};

export const Collections = () => {
  const [collection, setCollection] = useState(DEFAULT_COLLECTION);
  const collections = DEFAULT_COLLECTIONS_QUESTION;

  return (
    <div className={styles.collection}>
      {!collection.id &&
        collections.map((c) => (
          <ItemCollection
            key={c.id}
            collection={c}
            setCollection={setCollection}
          />
        ))}

      {collection.id && (
        <button
          style={{ width: "100px", margin: "0 auto" }}
          onClick={() => setCollection(DEFAULT_COLLECTION)}
        >
          Go Back
        </button>
      )}

      {collection.id && <QuestionDetails collectionsId={collection?.id} />}
    </div>
  );
};

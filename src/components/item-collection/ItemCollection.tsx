import styles from "./item.module.css";

type Collection = {
  id: string;
  title: string;
};

export const ItemCollection = ({
  collection,
  setCollection,
}: {
  collection: Collection;
  setCollection: any;
}) => {
  return (
    <div
      className={styles.collection}
      onClick={() => setCollection(collection)}
    >
      {collection.title}
    </div>
  );
};

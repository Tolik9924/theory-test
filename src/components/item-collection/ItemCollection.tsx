type Collection = {
  id: string;
  title: string;
  subtitle: string;
  level: string;
  category: string[];
  learnByInterest: string;
  learnBySkill: string;
  learningStyle: string;
  topic: string[];
};

export const ItemCollection = ({ collection }: { collection: Collection }) => {
  console.log("COLLECTION: ", collection);
  return <div>Item Collection: {collection.title}</div>;
};

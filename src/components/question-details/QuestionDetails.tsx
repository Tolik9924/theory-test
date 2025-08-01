import { ALL_QUESTIONS_BY_ID } from "../../constants/collections";
import { List } from "../list/List";

export const QuestionDetails = ({ questionsId }: { questionsId: string }) => {
  const questions = ALL_QUESTIONS_BY_ID.get(questionsId);

  const onClick = (id: string) => {
    console.log("ID: ", id);
  };

  return (
    <div>
      <div>{questions && <List data={questions} onClick={onClick} />}</div>
    </div>
  );
};

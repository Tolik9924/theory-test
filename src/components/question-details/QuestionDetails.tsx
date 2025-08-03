import { useEffect, useState } from "react";
import { ALL_QUESTIONS_BY_ID } from "../../constants/collections";

import styles from "./questionDetails.module.css";

export const QuestionDetails = ({
  collectionsId,
}: {
  collectionsId: string;
}) => {
  const [id, setId] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [allVariants, setAllVariants] = useState<string[]>([]);
  const questions = ALL_QUESTIONS_BY_ID.get(collectionsId);
  const question = questions && questions[id];
  const variantsFromQuestions = questions
    ?.map((q) => q.response[0])
    .filter((v) => v !== question?.response[0]);

  useEffect(() => {
    const variantsFromQuestion = getRandomElements(
      variantsFromQuestions || [],
      2
    );
    setAllVariants(
      getRandomElements(
        [...correctVariants, ...variantsFromQuestion],
        [...correctVariants, ...variantsFromQuestion].length
      )
    );
    setSelectedAnswer("");
  }, [id]);

  const getRandomElements = (array: string[], count: number) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  if (!question) {
    return <div>No question</div>;
  }

  const selectVariant = (answer: string) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === question?.response[0];
    setIsCorrect(isCorrect);

    if (isCorrect) {
      setTimeout(() => {
        goNextQuestion();
      }, 1000);
    }
  };

  const goNextQuestion = () => {
    setId((prevId) => {
      if (prevId !== questions.length - 1) {
        return prevId + 1;
      }

      return 0;
    });
  };

  const correctVariants = [question.response[0]];

  return (
    <div className={styles.test}>
      <div className={styles.question}>{question.question}</div>
      <div className={styles.variants}>
        {allVariants.map((v) => {
          const isSelected = selectedAnswer === v;
          const className = isSelected
            ? isCorrect
              ? styles.correctVariant
              : styles.unCorrectVariant
            : styles.variant;

          return (
            <div key={v} className={className} onClick={() => selectVariant(v)}>
              {v}
            </div>
          );
        })}
      </div>
      <div className={styles.nextButton}>
        <button onClick={goNextQuestion}>Next</button>
      </div>
    </div>
  );
};

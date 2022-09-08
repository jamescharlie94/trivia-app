import React, { useCallback, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { Check as CheckIcon, Close as CloseIcon } from "@mui/icons-material";

import { getQuiz } from "../../redux/slices/quiz";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Result, Question } from "../../types/quiz";
import { IRootState } from "../../redux/store";
import { useAppDispatch, useAppSelector } from "../../hooks/store";

function Quiz() {
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [results, setResults] = useState<Result[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const questions: Question[] = useAppSelector(
    (state: IRootState) => state.quiz.questions
  );

  useEffect(() => {
    dispatch(getQuiz(10, "hard"));
  }, [dispatch]);

  const handleSelectAnswer = useCallback(
    (answer: string) => {
      let correction: boolean;
      if (questions[quizIndex].correct_answer === answer) {
        correction = true;
      } else {
        correction = false;
      }
      setResults((prevState: Result[]) => [
        ...prevState,
        { index: quizIndex, correction },
      ]);

      if (quizIndex !== 9) {
        setQuizIndex(quizIndex + 1);
      } else {
        setShowResults(true);
      }
    },
    [questions, quizIndex]
  );

  const handlePlayAgain = useCallback(() => {
    setShowResults(false);
    setQuizIndex(0);
    setResults([]);
  }, []);

  return questions.length > 0 ? (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {showResults ? (
        <Box>
          {results.map((result: Result) => (
            <Box
              key={questions[result.index].question}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {result.correction ? (
                <CheckIcon color="success" />
              ) : (
                <CloseIcon color="error" />
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html: questions[result.index].question,
                }}
              />
            </Box>
          ))}
          <Button onClick={handlePlayAgain} color="primary" variant="contained">
            Play Again?
          </Button>
        </Box>
      ) : (
        <>
          <div
            dangerouslySetInnerHTML={{ __html: questions[quizIndex].question }}
          />
          <Box>
            <Button
              sx={{ marginRight: "40px" }}
              color="primary"
              variant="contained"
              onClick={() => handleSelectAnswer("True")}
            >
              Yes
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => handleSelectAnswer("False")}
            >
              No
            </Button>
          </Box>
        </>
      )}
    </Box>
  ) : (
    <LoadingSpinner />
  );
}

export default Quiz;

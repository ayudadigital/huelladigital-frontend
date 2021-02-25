import * as React from 'react';
import './FrequentlyAskedQuestions.scss';
import { Question } from '../../components/organisms/Question';
import { questions } from './FAQ.json';

export const FrequentlyAskedQuestions: React.FC<{}> = () => (
  <div className="Container">
    <h1>Preguntas frecuentes</h1>
    {questions.map((question, index) => {
       return <Question  key={index} title = {question.title} body = {question.answer} />;
    })}
  </div>
);

FrequentlyAskedQuestions.displayName = 'FrequentlyAskedQuestions';

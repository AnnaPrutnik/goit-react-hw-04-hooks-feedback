import { useState } from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtnFeedback = e => {
    const nameState = e.target.textContent;
    switch (nameState) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const feedbacks = {
    good,
    neutral,
    bad,
  };

  const feedbacksKey = Object.keys(feedbacks);
  const totalFeedbacks = good + neutral + bad;
  const positivePercentage = Math.round((good / totalFeedbacks) * 100);

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbacksKey}
          onLeaveFeedback={onClickBtnFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedbacks === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;

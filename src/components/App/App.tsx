import { useState } from "react";
import styles from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

function App() {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: "good" | "neutral" | "bad") => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const handleReset = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
    <div className={styles.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={handleReset}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? <VoteStats votes={votes} /> : <Notification />}
    </div>
  );
}

export default App;


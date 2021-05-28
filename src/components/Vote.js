import { useState } from 'react';
import * as newsApi from '../utils/api';

export const Vote = ({ votes, comment }) => {
  const [vote, setVoteChange] = useState(0);

  const incrementVote = () => {
    newsApi.patchVote(vote, 1).then(() => {
      setVoteChange((currVotes) => currVotes + 1);
    });
  };
  return <p>Vote:{votes + vote}</p>;
};

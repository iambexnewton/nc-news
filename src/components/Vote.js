import { useState } from 'react';
import * as newsApi from '../utils/api';
import { useParams } from 'react-router-dom';

export const Vote = ({ votes }) => {
  const [vote, setVoteChange] = useState(0);

  const { id } = useParams();

  const incrementVote = () => {
    newsApi.patchVote(id, 1).then(() => {
      setVoteChange((currVotes) => currVotes + 1);
    });
  };
  return (
    <div>
      <p>Vote:{votes + vote}</p>
      <button onClick={incrementVote}> votes increment </button>
    </div>
  );
};

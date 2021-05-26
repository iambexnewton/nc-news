import { useState } from 'react';

export const useVote = (initialCount = 0) => {
  const [vote, setVote] = useState(initialCount);

  const incrementVote = () => {
    setVote((currVote) => currVote + 1);
  };
  return { vote, setVote, incrementVote };
};

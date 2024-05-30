const messageSnippets = {
  beginnings: [
    "I see",
    "Your future holds",
    "You will soon experience",
    "The stars are aligning for",
    "Fate has in store for",
    "A great adventure awaits",
    "The universe is preparing",
    "Destiny is calling",
    "You are about to embark",
    "A new chapter is beginning",
    "A journey of self-discovery",
    "The future looks bright for",
    "Your dreams will become",
    "The winds of change are blowing",
    "I predict",
    "It is written in the stars",
    "The cards reveal",
    "Your fate is sealed",
    "The omens are favorable",
    "Your path is clear",
  ],
  middles: [
    "great success",
    "unexpected challenges",
    "an important decision",
    "a long journey",
    "true love",
    "a new friendship",
    "a life-changing opportunity",
    "financial prosperity",
    "inner peace",
    "spiritual growth",
    "a major breakthrough",
    "unlimited potential",
    "a positive change",
    "new beginnings",
    "a pleasant surprise",
    "an exciting adventure",
    "a soulmate connection",
    "personal transformation",
    "a fulfilled dream",
    "a happy ending",
  ],
  endings: [
    "in your near future.",
    "in the coming weeks.",
    "before the end of the year.",
    "sooner than you think.",
    "when you least expect it.",
    "at the right moment.",
    "in the nick of time.",
    "after a challenging period.",
    "as a reward for your efforts.",
    "when you take a leap of faith.",
    "when you trust your intuition.",
    "when you let go of the past.",
    "when you focus on the present.",
    "when you embrace the unknown.",
    "when you seek guidance.",
    "when you follow your heart.",
    "when you face your fears.",
    "when you believe in yourself.",
    "when you stay true to your values.",
    "when you find your purpose.",
  ],
};

const messageGenerator = (messageSnippets) => {
  let randomMessage = "This is your fortune:";

  const getRandomSnippet = (snippetsArray) => {
    const randomNumber = Math.floor(Math.random() * snippetsArray.length);
    return snippetsArray[randomNumber];
  };

  randomMessage += `\n${getRandomSnippet(messageSnippets.beginnings)}`;
  randomMessage += ` ${getRandomSnippet(messageSnippets.middles)}`;
  randomMessage += ` ${getRandomSnippet(messageSnippets.endings)}`;

  return randomMessage;
};

console.log(messageGenerator(messageSnippets));

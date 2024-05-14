import questionsData from "../questionsData.json" assert { type: "json" };

export function questionRandom() {
  const randomIndex = Math.floor(Math.random() * questionsData.length);
  return questionsData[randomIndex];
}

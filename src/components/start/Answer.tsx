type Props = {
  answer: string;
  isShown: boolean;
};
const Answer = ({ answer, isShown }: Props) => {
  return <p className="absolute inset-x-0 bottom-0">{isShown && answer}</p>;
};

export default Answer;

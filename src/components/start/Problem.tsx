type Props = {
  problem: string;
};
const Problem = ({ problem }: Props) => {
  return <h1 className="text-[50vmin]">{problem}</h1>;
};

export default Problem;

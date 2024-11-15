interface ResultDisplayProps {
  header: string;
  numCorrect: number;
  numTotal: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  header,
  numCorrect,
  numTotal,
}) => {
  return (
    <div className="flex flex-col items-stretch rounded-xl border-2 border-t-0 border-green-700 text-center">
      <div className="min-w-32 rounded-t-[10px] bg-green-700 py-1 font-bold text-white">
        {header}
      </div>
      <div className="px-10 py-2 text-lg font-medium text-green-700">
        {numCorrect}/{numTotal}
      </div>
    </div>
  );
};

export default ResultDisplay;

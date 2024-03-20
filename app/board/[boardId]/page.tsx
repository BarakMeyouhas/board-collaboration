import { Room } from "@/components/room";

import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";
import { Participants } from "./_components/Participants";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {

  return (
    <Room fallback={<Loading />} roomId={params.boardId}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;

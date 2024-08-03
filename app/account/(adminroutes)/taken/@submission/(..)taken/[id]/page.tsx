import Modal from "@/components/global/Modal";
import TakenIdPage from "../../../[id]/page";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    id: string;
  };
};

const page = async ({ params, searchParams }: Props) => {
  return <TakenIdPage params={params} searchParams={searchParams} />;
};

export default page;

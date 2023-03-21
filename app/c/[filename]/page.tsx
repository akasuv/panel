import Config from "@/components/Config";
import SaveButton from "@/components/SaveButton";
export const revalidate = 1;

const getConfig = async (filename: string) => {
  const res = await fetch(
    `http://localhost:4200/file?filename=${filename}`
  ).then((res) => res.json());

  return res;
};

const File = async ({ params }: { params: { filename: string } }) => {
  const res = await getConfig(params.filename);
  return (
    <div>
      <div className="sticky top-0 p-8 bg-white flex justify-between items-center">
        <h1 className="text-xl font-black">{params.filename}</h1>
        <SaveButton />
      </div>
      <div className="px-8">
        <Config element={JSON.parse(res)} />
      </div>
    </div>
  );
};

export default File;

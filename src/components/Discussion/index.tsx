import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Instance from "../../services/instance";
import { useAppSelector } from "../../stores/index";
import { useState } from "react";

type DiscussionProp = {
  id: number;
};

const DiscussionPerLesson: React.FC<DiscussionProp> = (id) => {
  const queryClient = useQueryClient();
  const { user } = useAppSelector((state) => state.auth);
  const [messageContent, setMessageContent] = useState<string>("");
  const fetchDiscussionByLesson = async (id: number) => {
    try {
      const res = await Instance.get(`discussion/${id}`);
      const { data } = res;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const { isPending, isError, data } = useQuery({
    queryKey: ["discussion", Number(id.id)],
    queryFn: () => fetchDiscussionByLesson(Number(id.id)),
    staleTime: Infinity,
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      return Instance.post("/discussion", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["discussion", Number(id.id)]);
    },
  });

  const dataCreateNewDiscussion = {
    user_id: user?.id,
    lesson_id: id.id,
    message_content: messageContent,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutation.mutate(dataCreateNewDiscussion);
    setMessageContent("");
  };

  if (isPending) {
    return <h1>Loading</h1>;
  }

  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <h1 className="font-bold text-2xl">Discussion</h1>
      {data.map((value: any, index: any) => (
        <div key={index + 1}>
          <div className="flex gap-4 mt-4 border border-gray-100 rounded-lg p-3">
            <div className="flex items-center">
              <img
                src={`${value.avatar}`}
                alt=""
                className=" w-[50px] h-[50px] rounded-[50%]"
              />
            </div>
            <div className="">
              <p className="font-bold text-lg">{value.first_name}</p>
              <p className="font-base text-xl">{value.message_content}</p>
            </div>
          </div>
        </div>
      ))}
      {mutation.isPending ? (
        <h1>loading</h1>
      ) : (
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-row gap-3 items-center">
              <label
                htmlFor="discussion"
                className="font-medium text-lg flex items-center"
              >
                Discussion
              </label>
              <input
                className="h-[40px] focus-visible:outline-none w-2/3 border border-gray-800 hover:border hover:border-blue-800 rounded-lg focus:none ps-3"
                value={messageContent}
                onChange={(e) => {
                  setMessageContent(e.target.value);
                }}
                type="discussion"
                placeholder={`comment as ${user?.firstName}`}
              />
              <button className="bg-green-800 py-3 rounded-lg w-1/5 text-xl text-white font-medium">
                Post
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default DiscussionPerLesson;

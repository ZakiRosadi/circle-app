import ThreadDetailLayout from "@/layout/ThreadDetailLayout";

export default function Threaddetaill() {
  // const [reply, setReply] = useState<any>();

  // const getReply = async () => {
  //   const res = await Api.get("/reply", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });
  //   setReply(res.data.data);
  // };
  // useEffect(() => {
  //   getReply();
  // }, [getReply]);

  return (
    <>
      <ThreadDetailLayout />
    </>
  );
}

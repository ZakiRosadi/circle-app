export default interface IReplyType {
  id: number;
  content: string;
  image: string;
  postedAt: string;
  user: {
    fullname: string;
    username: string;
  };
}

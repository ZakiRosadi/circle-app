export default interface IThreadDetailType {
  id: number;
  fullname: string;
  username: string;
  avatar: string;
  content: string;
  image: string;
  isLiked: boolean;
  like_count: number;
  replies: number;
  postedAt: string;
  user: {
    fullname: string;
    username: string;
  };
}

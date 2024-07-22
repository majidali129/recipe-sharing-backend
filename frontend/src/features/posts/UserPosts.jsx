import { useOutletContext } from "react-router-dom";

const UserPosts = () => {
  const [{ownPosts}] = useOutletContext()
  return (
    <ul className="grid gap-2 py-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 max-sm:gap-y-2">
      {ownPosts && ownPosts?.map(post => <figure key={post?._id} className=" rounded max-h-[340px] h-[340px]">
        <img src={post?.mediaUrl} alt="post image" className="object-cover w-full h-full rounded" />
      </figure>)}
    </ul>
  );
};

export default UserPosts;

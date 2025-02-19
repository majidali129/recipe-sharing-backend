import PropTypes from "prop-types";
import PostOverlay from "../../ui/PostOverlay";
import { useNavigate } from "react-router-dom";

const ExplorePostListItem = ({ post }) => {
  const navigate = useNavigate();
  return (
    <figure
      className="relative object-cover mb-4 rounded-md group"
      onClick={() => navigate(`/post/${post?._id}`)}
    >
      <img
        src={post.mediaUrl}
        alt="post image"
        className="object-cover w-full h-full rounded-md"
      />
      <PostOverlay
        comments={post?.comments?.length}
        likes={post?.likes?.length}
      />
    </figure>
  );
};

ExplorePostListItem.propTypes = {
  post: PropTypes.object
};

export default ExplorePostListItem;

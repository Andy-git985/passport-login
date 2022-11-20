import { Link } from 'react-router-dom';

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">
          {post.title}
          <img src={post.img} alt="" className="img" />
          <p className="desc">{post.desc}</p>
          <button className="cardButton">Read More</button>
        </span>
      </Link>
    </div>
  );
};

export default Card;

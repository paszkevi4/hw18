import React from 'react';
//@ts-ignore
import Post from './Post/Post.tsx';
import { PostType } from '../../store/postsReducer';

type PropsType = {
  posts: PostType;
  users: any;
};

const Posts: React.FC<any> = ({ posts, users }) => {
  return (
    <div className="posts_column">
      {posts.map((post: PostType, i: number) => {
        return (
          <Post
            index={i}
            name={users[post.author].name}
            avatar={users[post.author].avatar}
            nickname={users[post.author].nickname}
            date={post.publicationDate}
            content={post.text}
            image={post.image}
            liked={post.liked}
            likes={post.likesAmount}
            comments={post.commentariesAmount}
            reposted={post.reposted}
            reposts={post.repostAmount}
          />
        );
      })}
    </div>
  );
};

export default Posts;

import Posts from './Posts';
import { connect } from 'react-redux';
import { RootReducerType } from '../../store/store';

const mapStateToProps = (store: RootReducerType) => {
  return {
    posts: store.posts,
    users: store.users,
  };
};

export default connect(mapStateToProps, null)(Posts);

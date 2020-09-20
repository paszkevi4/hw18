import { connect } from 'react-redux';
import { RootReducerType } from '../../../store/store';
import { createPostAC } from '../../../store/postsReducer';
import AddPost from './AddPost';

const mapStateToProps = (store: RootReducerType) => {
  return {
    users: store.users,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     createNewPost: (newPost) => {
//       dispatch(createPostAC(newPost));
//     },
//   };
// };

export default connect(mapStateToProps, { createNewPost: createPostAC })(AddPost);

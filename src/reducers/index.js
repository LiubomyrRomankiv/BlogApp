import { combineReducers } from 'redux';
import { reduser as formReduser } from 'redux-form';
import PostsReduser from './reduser_posts';

const rootReducer = combineReducers({
  posts: PostsReduser,
  // form: formReduser
});

export default rootReducer;

import { combineReducers } from 'redux';
import PostsReduser from './reduser_posts';

const rootReducer = combineReducers({
  posts: PostsReduser
});

export default rootReducer;

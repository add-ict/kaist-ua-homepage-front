import { createAction, handleActions } from "redux-actions";

const INIT = "post/INIT";
const CHANGE_FIELD = "post/CHANGE_FIELD";
const WRITE_POST = "post/WRITE_POST";

export const init = createAction(INIT);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value
}));
export const writePost = createAction(
  WRITE_POST,
  ({ id, title, author, content, boardId }) => ({
    id,
    title,
    author,
    content,
    boardId
  })
);

const initialState = {
  title: "",
  author: "",
  content: "",
  boardId: 1,
  views: 0,
  post: null
};

const post = handleActions(
  {
    [INIT]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value
    }),
    [WRITE_POST]: (state, { payload: post }) => ({
      ...state,
      post
    })
  },
  initialState
);

export default post;

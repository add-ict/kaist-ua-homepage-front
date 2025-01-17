import React, { useEffect, useState } from "react";
import HomeContent from "../../templates/HomeContent";
import * as boardsAPI from "../../../lib/api/board";
import * as postsAPI from "../../../lib/api/post";

const HomeContentContainer = () => {
  const [boards, setBoards] = useState([]);
  const [boardModuleInfos, setBoardModuleInfos] = useState([]);

  useEffect(() => {
    boardsAPI
      .list()
      .then(res => {
        setBoards(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    async function fetchData() {
      var ret = [];
      console.log(boards)
      for (const board of boards) {
        if (board.viewHome) {
          const boardId = board.id;
          const page = 1;
          try {
            const res = await postsAPI.list({ boardId, page });
            const boardModuleInfo = {
              board,
              posts: res.data.posts.slice(0, 5)
            };
            ret = ret.concat(boardModuleInfo);
          } catch (err) {
            console.log(err);
          }
        }
      }
      return ret;
    }
    fetchData().then(res => setBoardModuleInfos(res));
  }, [boards]);
  return <HomeContent BoardModuleInfos={boardModuleInfos} />;
};

export default HomeContentContainer;

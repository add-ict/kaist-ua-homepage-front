import React from "react";
import { Container } from "react-bootstrap";
import "./BoardContent.scss";
import { BoardList } from "../organisms";
import { BoardHeader, BoardFooter } from "../molecules";
import { Loading } from "../atoms";
import { isEmpty } from "lodash";

const BoardContent = ({ boards, boardId, posts }) => {
  if (isEmpty(boards)) return <Loading />;

  const board = boards.find(board => `${board.id}` === boardId);

  const { korTitle, engTitle, korDescription, engDescription } = board;

  return (
    <Container className="flex-grow-1 board-content">
      <BoardHeader
        title={{ korTitle, engTitle }}
        description={{ korDescription, engDescription }}
      />
      <BoardList posts={posts} />
      <BoardFooter boardId={boardId} />
    </Container>
  );
};

export default BoardContent;

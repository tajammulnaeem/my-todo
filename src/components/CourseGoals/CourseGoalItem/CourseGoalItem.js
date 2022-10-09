import React from "react";
import "./CourseGoalItem.css";
import Button from "../../UI/Button/Button";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="goal-item">
      <p>{props.children}</p>

      <Button className="btn" isDelete={true} onClick={deleteHandler}>
        Delete
      </Button>
    </div>
  );
};

export default CourseGoalItem;

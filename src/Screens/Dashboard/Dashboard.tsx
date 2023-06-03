import React, { useEffect, useState } from "react";
import { todo } from "../../Components/helperTodo";
import arrow_icon from "../../Assets/arrow-right-icon.svg";
import Header from "../../Components/Header/Header";
import "./Dashboard.scss";

const Dashboard = () => {
  const [showSubToDo, setShowSubToDo] = useState(false);
  const [toDo, setToDo] = useState([
    {
      text: "This is a sampe todo",
      isDone: false,
      subTask: [
        {
          taskName: "Do POC",
        },
      ],
    },
  ]);
  const [newToDo, setNewToDo] = useState(null);
  const [value, setValue] = useState("");
  const [subValue, setSubValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };
  console.log(value, subValue);
  const addToDo = (text: any) => {
    const newToDo: any = [...toDo, { text, subTask: [] }];
    setToDo(newToDo);
  };

  const addSubTask = (task: string, index: any) => {
    const newSubTask: any = toDo[index]?.subTask?.push({ taskName: task });
    setSubValue("");
    // console.log(newSubTask);
    // setToDo();
  };

  const markTodo = (index: any) => {
    const newTodos: any = [...toDo];
    newTodos[index].isDone = true;
    setToDo(newTodos);
  };

  const removeTodo = (index: any) => {
    console.log(index);
    const newTodos: any = [...toDo];
    console.log("todo", toDo);
    console.log(newTodos.splice(index, 1));
    setToDo(newTodos);
  };

  const handleShowSubTask = (index: any) => {
    setShowSubToDo(!showSubToDo);
  };

  return (
    <>
      <Header />
      <div className="todo-wrapper">
        <div className="todo-list-container">
          <h6 className="text-align-center">ToDo List</h6>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Add an item.."
                onChange={(e: any) => setValue(e.target.value)}
                value={value}
                className="form-control"
              />
            </form>
          </div>
          {toDo?.map((ele, key) => {
            return (
              <>
                <div key={key}>
                  <div
                    className="task-container"
                    style={{ textDecoration: ele.isDone ? "line-through" : "" }}
                  >
                    {`${key + 1}. ${ele.text}`}{" "}
                    <div className="d-flex justify-content-between w-25">
                      <button
                        className="btn btn-outline-success"
                        onClick={() => markTodo(key)}
                      >
                        ✓
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeTodo(key)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  <br />

                  <div className="subtask-container">
                    <div className="d-flex justify-content-between">
                      <div>
                        <form onSubmit={() => addSubTask(subValue, key)}>
                          <input
                            type="text"
                            placeholder="Add Subtask.."
                            value={subValue}
                            className="form-control"
                            onChange={(e: any) => setSubValue(e.target.value)}
                          />
                        </form>
                      </div>
                      <div className="d-flex justify-content-between w-25">
                        <button
                          onClick={() => addSubTask(subValue, key)}
                          className="btn btn-outline-primary"
                        >
                          +
                        </button>
                        {ele?.subTask?.length > 0 && !showSubToDo ? (
                          <button
                            onClick={() => setShowSubToDo(!showSubToDo)}
                            className="btn btn-outline-secondary"
                          >
                            Show
                          </button>
                        ) : (
                          <button
                            onClick={() => setShowSubToDo(!showSubToDo)}
                            className="btn btn-outline-primary"
                          >
                            Hide
                          </button>
                        )}
                      </div>
                    </div>
                    {showSubToDo &&
                      ele?.subTask?.map((item, key) => {
                        return (
                          <>
                            <div className="subtask-wrapper">{`----> ${
                              key + 1
                            }. ${item.taskName}`}</div>
                          </>
                        );
                      })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

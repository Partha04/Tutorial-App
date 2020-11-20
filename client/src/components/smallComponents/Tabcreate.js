import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Tab = ({ content, updatetopics, lessionid }) => {
  const [Collapse, setCollapse] = useState(
    "table table-striped w-100 h-0 mx-auto coll"
  );

  const toggleColapse = () => {
    if (Collapse === "table table-striped w-100 h-0 mx-auto coll") {
      setCollapse("table table-striped w-100 mx-auto exp");
    } else {
      setCollapse("table table-striped w-100 h-0 mx-auto coll");
    }
  };

  const [learndata, setlearndata] = useState([]);
  const [practicedata, setpracticedata] = useState([]);

  const [learnlink, setlearnlink] = useState("");
  const [learntype, setlearntype] = useState("");

  const [practicelink, setpracticelink] = useState("");
  const [practicetype, setpracticetype] = useState("");

  const getdata = () => {
    var config1 = {
      method: "get",
      url: "http://localhost:5000/learn/" + content.topicid,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    axios(config1)
      .then(function (response) {
        setlearndata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    var config2 = {
      method: "get",
      url: "http://localhost:5000/practice/" + content.topicid,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    axios(config2)
      .then(function (response) {
        setpracticedata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addLearn = () => {
    if (learnlink === "" || learntype === "") {
      toast.warning("Add all fields");
      return;
    }
    var data = {
      topicid: content.topicid,
      link: learnlink,
      type: learntype,
    };

    var config1 = {
      method: "post",
      url: "http://localhost:5000/learn/",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      data: data,
    };

    axios(config1)
      .then(function (response) {
        toast.success("Created new Learn link");
        getdata();
        setlearnlink("");
        setlearntype("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addPractice = () => {
    if (practicelink === "" || practicetype === "") {
      toast.warning("Add all fields");
      return;
    }

    var data = {
      topicid: content.topicid,
      link: practicelink,
      source: practicetype,
    };

    var config1 = {
      method: "post",
      url: "http://localhost:5000/practice/",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      data: data,
    };

    axios(config1)
      .then(function (response) {
        toast.success("Created new practice link");
        getdata();
        setpracticelink("");
        setpracticetype("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteLearn = (id) => {
    var config = {
      method: "delete",
      url: "http://localhost:5000/learn/" + id,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        toast.success("Deleted Learn Link");
        getdata();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const deletepractice = (id) => {
    var config = {
      method: "delete",
      url: "http://localhost:5000/practice/" + id,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        toast.success("Deleted practice Link");
        getdata();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteTopic = (id) => {
    var config = {
      method: "delete",
      url: "http://localhost:5000/topic/" + id,
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        updatetopics(lessionid);
        toast.success("Deleted Topic");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div className="tutorial bg-light col-md-10 my-1 p-2 mx-auto border border-secondary rounded">
        <div className="d-flex justify-content-between align-items-center ">
          <h6 className="mx-2" onClick={toggleColapse}>
            {content.topicname}
          </h6>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteTopic(content.topicid);
            }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-x-octagon-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
              />
            </svg>
          </button>
        </div>

        <div className={Collapse}>
          <p className="p-2 text-secondary">{content.topicdescription}</p>
        </div>

        <table className={Collapse}>
          <thead className="bg-secondary text-white">
            <tr>
              <td className="w-50">Learn</td>
              <td className="w-25">Type</td>
              <td className="w-25">Options</td>
            </tr>
          </thead>

          <tbody>
            {learndata.map((d) => {
              return (
                <tr>
                  <td className="w-50">
                    <a href={d.link} target="_blank">
                      {d.link}
                    </a>
                  </td>
                  <td className="w-25">{d.type}</td>
                  <td className="w-25">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteLearn(d.learnid)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-x-octagon-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* -------add learn ---------------- */}
            <tr>
              <td className="w-50">
                <input
                  className="form-control"
                  type="text"
                  placeholder="New Learn link"
                  value={learnlink}
                  onChange={(e) => {
                    setlearnlink(e.target.value);
                  }}
                />
              </td>
              <td className="w-25">
                <input
                  className="form-control"
                  type="text"
                  placeholder="type"
                  value={learntype}
                  onChange={(e) => {
                    setlearntype(e.target.value);
                  }}
                />
              </td>
              <td className="w-25">
                <button className="btn btn-outline-success" onClick={addLearn}>
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table className={Collapse}>
          <thead className="bg-success text-white">
            <tr>
              <td className="w-50">Practice</td>
              <td className="w-25">Source</td>
              <td className="w-25">Completed</td>
            </tr>
          </thead>
          <tbody>
            {practicedata.map((d) => {
              return (
                <tr>
                  <td className="w-50">
                    {" "}
                    <a href={d.link} target="_blank">
                      {d.link}
                    </a>
                  </td>
                  <td className="w-25">{d.source}</td>
                  <td className="w-25">
                    <button
                      className="btn btn-danger"
                      onClick={() => deletepractice(d.practiceid)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-x-octagon-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* -------add practice ---------------- */}
            <tr>
              <td className="w-50">
                <input
                  className="form-control"
                  type="text"
                  placeholder="New practice link"
                  value={practicelink}
                  onChange={(e) => {
                    setpracticelink(e.target.value);
                  }}
                />
              </td>
              <td className="w-25">
                <input
                  className="form-control"
                  type="text"
                  placeholder="source"
                  value={practicetype}
                  onChange={(e) => {
                    setpracticetype(e.target.value);
                  }}
                />
              </td>
              <td className="w-25">
                <button
                  className="btn btn-outline-success"
                  onClick={addPractice}
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab;

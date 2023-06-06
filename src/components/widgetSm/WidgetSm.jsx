import { useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTlhNWJiNmRkYjRlODg1NTMzZGRhNSIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjg2MDE3MDYzLCJleHAiOjE2ODY0NDkwNjN9.q2bDOAQe_LwXVa-psFXNGRW-DJVheQsggLJuFnKa1kE"
          },
        });
        setNewUsers(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (

          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbFZOqWAo8inJD3PaOw62ijntmmPr-i2p8w&usqp=CAU"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
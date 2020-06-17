import React from "react";

//import './App.css';
import CurrentLevel from "../components/CurrentLevel";
import backbutton from "../SVG/back-button.svg";
import { useUserState } from "../context/UserContext";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import { useHistory,useParams } from "react-router-dom";

const GET_DIARY = gql`
  query Diary($userid: ID) {
    diary(_id: $userid) {
      title
      entry
    }
  }
`;

function DiaryRead() {
  const {id} = useParams();
  let history = useHistory();
  const user = useUserState();
  const { loading, error, data } = useQuery(GET_DIARY, {
    variables: {
      userid: id,
    },
  });

  if (loading) return <h4>loading</h4>;
  if (error) console.log(error);

  return (
    <div className="base-container">
      <header>
        <div class="start">
          <a onClick={() => history.push("/diary")}>
            <img src={backbutton} alt="terugknop" class="terugknop" />
          </a>
        </div>
        <br />
        <CurrentLevel />
      </header>
      <div class="maindash">
        <button class="dash1" id="opdrachten">
          <div class="inhoudopdracht">
            <h2 id="hulp"> {data.diary.title} </h2>
            <p class="uitleg">{data.diary.entry}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default DiaryRead;

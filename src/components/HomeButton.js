import { Link } from "react-router-dom";
import "./homeButton.css";

const HomeButton = () => {
  return (
    <Link to={`/`}>
      <div className="homeButton">
        <svg fill="white" width="45" height="45" viewBox="0 0 25 25">
          <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
        </svg>
      </div>
    </Link>
  );
};

export default HomeButton;

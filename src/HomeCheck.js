import { Link } from "react-router-dom";

const HomeCheck = () => {
  return (
    <div>
      <Link to="/SecondHome">
        <button>Click to Navigate</button>
      </Link>
    </div>
  );
};

export default HomeCheck;

import { Link } from "react-router-dom";

const SecondHome = () => {
  return (
    <div>
      <Link to="/SecondHome/products">
        <button>Click to Navigate to second Home</button>
      </Link>
    </div>
  );
};

export default SecondHome;

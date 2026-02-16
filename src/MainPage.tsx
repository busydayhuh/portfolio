import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <div>MainPage</div>
      <p>
        <Link to={"/projects/wisharchive"}>К странице проекта</Link>
      </p>
    </div>
  );
}

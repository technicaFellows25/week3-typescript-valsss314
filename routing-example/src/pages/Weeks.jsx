import { Link } from "react-router";

const Weeks = () => {
  return (
    <>
      <h1>Weeks</h1>
      <p>Below are some of the weeks for bootcamp.</p>
      <ol>
        <li><Link to="/weeks/1">Week 1: Git and GitHub</Link></li>
        <li><Link to="/weeks/2">Week 2: Figma and Intro to HTML/CSS</Link></li>
        <li><Link to="/weeks/3">Week 3: HTML/CSS Continued</Link></li>
        <li><Link to="/weeks/4">Week 4: JavaScript</Link></li>
        <li><Link to="/weeks/5">Week 5: Node.js, JSX, and React</Link></li>
      </ol>
    </>
  );
}

export default Weeks;
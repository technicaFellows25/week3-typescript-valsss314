import { useNavigate, useParams } from "react-router";
import PageNotFound from "./PageNotFound";

const validWeeks = [1, 2, 3, 4, 5];

const weekTitles = {
  1: "Git and GitHub",
  2: "Figma and Intro to HTML/CSS",
  3: "HTML/CSS Continued",
  4: "JavaScript",
  5: "Node.js, JSX, and React",
};

const homeworkInfo = {
  1: "Create your profile on Slack",
  2: "Complete the Brandon's Burritos Assignment",
  3: "Complete the HTML/CSS About Me Assignment",
  4: "Complete the JavaScript Assignment",
  5: "Complete the HTML/CSS React Assignment",
};

const Week = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const bootcampWeek = parseInt(number);

  const handlePrevious = () => {
    navigate(`/weeks/${bootcampWeek - 1}`);
  };

  const handleNext = () => {
    navigate(`/weeks/${bootcampWeek + 1}`);
  };

  // So /weeks/SDFLKJ or /weeks/-1 is not a valid page
  if (isNaN(bootcampWeek) || !validWeeks.includes(bootcampWeek)) {
    return <PageNotFound />;
  }

  return (
    <>
      <h1>
        Week {number}: {weekTitles[bootcampWeek]}
      </h1>
      <h2>Homework:</h2>
      <p>{homeworkInfo[bootcampWeek]}</p>
      <div className="flex justify-between w-1/2 m-10">
        <button onClick={handlePrevious} disabled={bootcampWeek === 1}>
          Previous Week
        </button>
        <button onClick={handleNext} disabled={bootcampWeek === 5}>
          Next Week
        </button>
      </div>
    </>
  );
};

export default Week;

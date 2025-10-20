import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img
              key={work.w_no ?? index}
              src={work.w_img}
              alt={work.w_name || `project-${index + 1}`}
            />
          );
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
      </div>
    </div>
  );
};

export default MyWork;

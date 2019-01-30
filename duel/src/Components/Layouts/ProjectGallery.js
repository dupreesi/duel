import ProjectJSON from '../../projects.json';

import React, { Component } from 'react';

import { ProjectGalleryFrame, ProjectGalleryLink } from './Main.style.js';

export default class ProjectGallery extends Component {
  render() {
    return (
      <div>
        <section className="cf flex items-center jusitfy-center mt5">
          <h1 className="tc f5 ttu fw3 tracked">Other Projects</h1>
          {ProjectJSON.map(({ Tag, Title, TitleImg }) => {
            return (
              <ProjectGalleryLink to={`/projects/${Tag}`} title="">
                <ProjectGalleryFrame
                  img={require(`../../assets/workScreens/${TitleImg}`)}
                >
                  <span class="white dtc v-mid w-100 h-100 child bg-black-40 pa6">
                    <h3 className="link">{Title}</h3>
                  </span>
                </ProjectGalleryFrame>
              </ProjectGalleryLink>
            );
          })}
        </section>
      </div>
    );
  }
}
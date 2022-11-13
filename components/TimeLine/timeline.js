import * as React from "react";
import { StyledTimeLine } from ".//compstyles/timelinestyles";


export default function TimeLine({ searchValue, ...prop }) {
  const playlistsNames = Object.keys(prop.playlists);
  return (
    <>
      <StyledTimeLine>
        {playlistsNames.map((playlistsName) => {
          const videos = prop.playlists[playlistsName];
          return (
            <section key={playlistsName}>
              <h2 >{playlistsName}</h2>
              <div>

                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase();
                    const searchValueNormalized = searchValue.toLowerCase();
                    return titleNormalized.includes(searchValueNormalized)
                  })

                  .map((video) => {
                    return (

                      <a key={video.url} href={video.url} target="_blank">
                        <img src={video.thumb} />
                        <span >{video.title}</span>
                      </a>
                    )
                  })}
              </div>
            </section>
          )
        })
        }
      </StyledTimeLine>
    </>
  )
}
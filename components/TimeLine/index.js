import styles from "../../styles/timelines.module.css";
import * as React from "react";
import { ThemeProvider } from "styled-components";


export default function TimeLine({ searchValue, ...prop }) {
    const playlistsNames = Object.keys(prop.playlists);
    return (
        <>
            {playlistsNames.map((playlistsName) => {
                const videos = prop.playlists[playlistsName];
                return (
                    <section key={playlistsName} className={styles.sectionvideo}>
                        <h2 className={styles.tituloh2}>{playlistsName}</h2>
                        <div className={styles.divvideo}>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url} className={styles.avideo} target="_blank">
                                            <style jsx>{`
                                            a{
                                                color: ${({ theme }) => theme.textColorBase || "#222222"};                
                                            }          
                                            `}</style>
                                            <img className={styles.thumbvideo} src={video.thumb} />
                                            <span lang="pt" className={styles.spanvideo}>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })
            }
        </>
    )
}
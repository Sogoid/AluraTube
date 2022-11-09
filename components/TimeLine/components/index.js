import config from "../../../config.json";
import styles from "../../../styles/timelines.module.css";

export default function TimeLine(prop) {
    const playlistsNames = Object.keys(prop.playlists);
    return (
        <div className={styles.TimeLine}>
            {playlistsNames.map((playlistsNames) => {
                const videos = prop.playlists[playlistsNames];
                return (
                    <section className={styles.sectionvideo}>
                        <h2 className={styles.tituloh2}>{playlistsNames}</h2>
                        <div className={styles.divvideo}>
                            {videos.map((video) => {
                                return (
                                    <a className={styles.avideo} href={video.url}>
                                        <img className={styles.thumbvideo} src={video.thumb} />
                                        <span className={styles.spanvideo}>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
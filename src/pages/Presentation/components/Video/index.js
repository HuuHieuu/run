import classNames from "classnames/bind";
import styles from "./Video.module.scss";

const cx = classNames.bind(styles)

function Video() {
    return ( 
        <>
        <div className={cx('vd-size')}>
            <div className={cx('video-background')}>
                <iframe width="1118" height="629" src="https://www.youtube.com/embed/d4TH_9rd02c?si=aypjlOn-qLOnMEHn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        </>
     );
}

export default Video

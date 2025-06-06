import styles from "./SocialLinksProfile.module.css";

export default function SocialLinksProfile() {
  return (
    <section className={`${styles.SocialLinksProfileCard}`}>
      <header className={`${styles.ProfileGroup}`}>
        <img
          src="/avatar-jessica.jpeg"
          alt="Portrait of Jessica Randall"
          className={`${styles.ProfileImage}`}
        />
        <div className={`${styles.ProfileTextGroup}`}>
          <h2 className={`${styles.ProfileName}`}>Jessica Randall</h2>
          <p className={`${styles.ProfileLocation}`}>London, United Kingdom</p>
        </div>
        <p className={`${styles.ProfileBio}`}>
          Front-end developer and avid reader.
        </p>
        <nav
          className={`${styles.SocialLinksGroup}`}
          aria-label="Social media links"
        >
          <ul>
            <li>
              <a href="#Github">GitHub</a>
            </li>
            <li>
              <a href="#FrontendMentor">Frontend Mentor</a>
            </li>
            <li>
              <a href="#LinkedIn">LinkedIn</a>
            </li>
            <li>
              <a href="#Twitter">Twitter</a>
            </li>
            <li>
              <a href="#Instagram">Instagram</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
}

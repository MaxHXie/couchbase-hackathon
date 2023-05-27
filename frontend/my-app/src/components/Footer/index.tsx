import "./style.scss"

export const Footer = () => {
  return (
    <footer className="standardPaddingSection">
      <div
        className={`upperHorizontalSection ${
          device.width.sm480 || device.width.md480_768 ? "mobile" : ""
        }`}
      >
        <div className="logoSection">
          {logoSrc && (
            <Link to="#">
              <img className="logoIcon" src={logoSrc} alt="logo" />
            </Link>
          )}
          <div className="socialMediaContainer">
            <PrimaryParagraph inlineStyles={{ color: "var(--color-cta)" }}>
              <a
                href="https://linktr.ee/blankt"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.follow_cta")}
              </a>
            </PrimaryParagraph>
            <div className="socialMediaLinks">
              <a
                href="https://www.facebook.com/blanktcom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReactSVG
                  src={S3_BUCKET_STATIC + "/static/icons/facebook.svg"}
                  desc="facebook"
                  className="socialMediaIcon"
                />
              </a>
              <a
                href="https://www.instagram.com/blanktcom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReactSVG
                  src={S3_BUCKET_STATIC + "/static/icons/instagram.svg"}
                  desc="instagram"
                  className="socialMediaIcon"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCLlFJ9_W3izvtPVDmzmbxYw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReactSVG
                  src={S3_BUCKET_STATIC + "/static/icons/youtube.svg"}
                  desc="youtube"
                  className="socialMediaIcon"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/79901907/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReactSVG
                  src={S3_BUCKET_STATIC + "/static/icons/linkedin.svg"}
                  desc="linkedin"
                  className="socialMediaIcon"
                />
              </a>
              <a
                href="https://www.tiktok.com/@blanktcom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ReactSVG
                  src={S3_BUCKET_STATIC + "/static/icons/tiktok.svg"}
                  desc="tiktok"
                  className="socialMediaIcon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerHorizontalSection">
        <p>Blinket Group&copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

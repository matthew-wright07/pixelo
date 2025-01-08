import styles from "./homeHeader.module.css"

export default function HomeHeader() {
    return (
      <div
        className="px-4 py-5 text-center"
        style={{
          backgroundColor: "#222831", // Dark background
          color: "#EEEEEE", // Light text
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }}
      >
        <img
          className="d-block mx-auto mb-4"
          src="/logo.png"
          alt="Logo"
          width="72"
          height="72"
        />
        <h1
          className="display-5 fw-bold "
          style={{ fontFamily: "Arial, sans-serif",color: "#EEEEEE" }}
        >
          Pixelo
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly Make AI Generated Images With Pixelo, The World’s Most Popular AI Image Generator.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="/create">
            <button
              type="button"
              className={` ${styles.hover}`}
            >
              Try Now
            </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
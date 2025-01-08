import styles from './header.module.css';

export default function Header() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3" 
                style={{ backgroundColor: '#222831', color: '#f1f1f1', paddingLeft: '20px', paddingRight: '30px' }}>
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none" style={{ color: '#f1f1f1' }}>
              <img src="/logo.png" className="bi" width="40" height="40" role="img" aria-label="Bootstrap" />
              <span className="fw-bold" style={{ fontFamily: "Arial, sans-serif",color: "#EEEEEE",fontSize:"29px",marginLeft:"10px" }}>Pixelo</span>
            </a>
          </div>
  
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" className="nav-link px-2" style={{ color: '#EEEEEE' }}>Home</a></li>
            <li><a href="/create" className="nav-link px-2" style={{ color: '#EEEEEE' }}>Create</a></li>
            <li><a href="/pricing" className="nav-link px-2" style={{ color: '#EEEEEE' }}>Pricing</a></li>
            <li><a href="/about" className="nav-link px-2" style={{ color: '#EEEEEE' }}>About</a></li>
          </ul>
  
          <div className="col-md-3 text-end">

            <a href="https://ko-fi.com/matthew_wright"><button type="button" className={`${styles.purpleBtn}`}>Donate</button></a>
          </div>
        </header>
    );
}

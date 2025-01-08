export default function Footer() {
    return (
      <footer className="py-2 my-0" style={{ backgroundColor: '#222831', color: '#eeeeee' }}>
        <ul className="nav justify-content-center pb-2 mb-0">
          <li className="nav-item"><a href="/" className="nav-link px-2" style={{ color: '#eeeeee' }}>Home</a></li>
          <li className="nav-item"><a href="/create" className="nav-link px-2" style={{ color: '#eeeeee' }}>Create</a></li>
          <li className="nav-item"><a href="/pricing" className="nav-link px-2" style={{ color: '#eeeeee' }}>Pricing</a></li>
          <li className="nav-item"><a href="/about" className="nav-link px-2" style={{ color: '#eeeeee' }}>About</a></li>
        </ul>
        <p className="text-center" style={{ color: '#eeeeee' }}>© 2025 Pixelo</p>
      </footer>
    );
  }
  
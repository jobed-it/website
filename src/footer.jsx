export default function Footer() {
  return (
    <footer className="footer p-10 bg-accent text-white">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Clowning</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form data-netlify="true">
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Scrivi la tua email</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="tu@mail.it"
              className="input join-item"
            />
            <button type="submit" className="btn btn-primary join-item">
              Iscrivimi
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}

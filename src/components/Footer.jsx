function Footer() {
  return (
    <footer className="footer">
      <div className="footer-title">
        <div className="footer-logo">
          <a href="">
            {" "}
            <img src="./public/images/logo-icon.webp" alt="logo" />
          </a>
          <a href="">
            {" "}
            <h1 className="footer-belissimo">Belissimo Pizza</h1>
          </a>
          <p className="footer-raqam">RAQAMGA QONG'IROQ QILING - 1174</p>
        </div>
        <div className="footer-bizHaqimizda">
          <a href="/About">Biz haqimizda </a>
          <a href="#">Ommaviy oferta</a>
          <a href="#">Maxfiylik siyosati</a>
          <a href="#">Halol sertifikati</a>
          <a href="#">Restoranlar</a>
        </div>
        <div className="footer-ishOrinlari">
          <a href="https://jobs.bellissimo.uz/">Bizning ish o'rinlarimiz</a>
          <h3>© 2016-2025 Belissimo Pizza</h3>
        </div>
        <div className="footer-tolovTuri">
          <img src="./public/images/payme-footer.svg" alt="payme" />
          <img src="./public/images/uzcard-footer.svg" alt="uzcard" />
          <img src="./public/images/click-footer.svg" alt="click" />
        </div>
        <div className="footer-ijtimoiyTarmoqlar">
          <p>Bizni kuzatib boring</p>
          <>
            <a target="_blank" href="#">
              <img src="./public/images/footer-facebook.svg" alt="facebook" />
            </a>
          </>
          <>
            <a target="_blank" href="https://instagram.com/_rahimberdiyev_sh">
              <img src="./public/images/instagram.svg" alt="instagram" />
            </a>
          </>
          <>
            <a target="_blank" href="https://t.me/Rahimberdiyev_Sh">
              <img src="./public/images/telegram-icon.svg" alt="telegram" />
            </a>
          </>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

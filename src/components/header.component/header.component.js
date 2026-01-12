import container from "../layout/container.module.css";
import "./header.component.css";

const HeaderComponent = ({ onSearch }) => {
  return (
    <header className={container.container}>
      <div className="header">
        <div className="header__left">
          <h1 className="logo">
            Furniture<span>Store</span>
          </h1>
          <p className="subtitle">The biggest choice on the web</p>
        </div>

        <div className="header__right">
          <div className="top-links">
            <a href="#">Log in</a>
            <a href="#">Create an account</a>
            <a href="#">Check out</a>
          </div>

          <div className="cart-search">
            <div className="cart">
              🛒 My cart: <strong>0 item(s)</strong> – <strong>$0.00</strong>
            </div>

            <div className="search">
              <input
                type="text"
                placeholder="Search store..."
                onChange={e => onSearch(e.target.value)} 
              />
              <button>🔍</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent; 
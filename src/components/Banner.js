import BannerImg from "../image/shopping.jpg";
import "../style/banner.css"
function Banner() {
  return (
    <div className="userbanner">
      <h1>
      Style Meets Savings <br /> Shop Trendy Clothes Online Today!<br /> with <span>Shopping Mart!</span>
      </h1>
      <p>Kids - Men - Women </p>
      <img src={BannerImg} alt="banner" />
    </div>
  );
}

export default Banner;

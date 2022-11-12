import styles from "./Horizontal.module.css";
const products = [
  {
    id: 1,
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/a/a/aadb28e8904320705275_1.jpg",
    tittle: "SUGAR Smudge Me Not Liquid Mini Lipstick Bold Set(1.1ml E...",
    subtittle: "1.1ml Each",
    badge: "BESTSELLER",
    totalreview: "1776",
    price: "₹999 Off",
    orignalprice: "₹799",
    percentoff: "20% Off!",
  },
  {
    id: 2,
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/n/y/nylagrl000033-a_1.png",
    tittle: "L.A. Girl Pro Conceal HD",
    subtittle: "39 Shades",
    badge: "BESTSELLER",
    totalreview: "24873",
    price: "₹875",
    orignalprice: "₹695",
    percentoff: "10% Off!",
  },
  {
    id: 3,
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/b/0b4f0c58904245701505_0.jpg",
    tittle: "Just Herbs Ayurvedic Matte Lipstick Micro-Mini Trial Kit",
    subtittle: "38gm",
    badge: "BESTSELLER",
    totalreview: "8557",
    price: "₹575",
    orignalprice: "₹403",
    percentoff: "30% Off!",
  },
  {
    id: 4,
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/e/5e73ea7800897813727_1.jpg",
    tittle: "Nykaa Black Magic Liquid Eyeliner - Super Black 01",
    subtittle: "5ml",
    badge: "BESTSELLER",
    price: "499",
    totalreview: "14427",
    orignalprice: "₹299",
    percentoff: "50% Off!",
  },
  {
    id: 5,
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/8/f8eeeadMINIM00000001_1n.jpg",
    tittle: "NYX Professional Makeup Setting Spray Dewy Finish",
    subtittle: "60ml",
    badge: "BESTSELLER",
    totalreview: "3426",
    price: "1200",
    orignalprice: "₹875",
    percentoff: "25% off!",
  },
  {
    id: 6,
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/7/8710103897392_1_.jpg",
    tittle: "Minimalist 10% Niacinamide Face Serum With EUK-134 For Re...",
    subtittle: "30ml",
    badge: "BESTSELLER",
    price: "1000",
    totalreview: "11915",
    orignalprice: "₹599",
    percentoff: "40% off!",
  },
  {
    id: 7,
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/a/8a541fbDOTKE00000054-1.jpg",
    tittle: "Philips Heated Straightening Brush (BHH880/10)",
    badge: "BESTSELLER",
    subtittle: "180 ml",
    totalreview: "1849",
    price: "₹3695",
    orignalprice: "₹3099",
    percentoff: "16% Off!",
  },
  {
    id: 8,
    url: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/s/c/schwarzkopf-professional-osis_-sparkler-shine-spray.jpg",
    tittle: "Dot & Key Vitamin C + E Super Bright Glow Moisturizer, Fa...",
    subtittle: "60 ml",
    badge: "BESTSELLER",
    totalreview: "3415",
    price: "₹595",
    orignalprice: "₹536",
    percentoff: "10% Off!",
  },
];

function Horizontal() {
  return (
    <>
      <div className={styles.media_scroller}>
        {products.map((product, index) => (
          <div className={styles.media_element}>
            <img src={`${product.url}`} alt="" />
            <p className={styles.detail}>{`${product.tittle}`}</p>
            <div className={styles.subtittle}> {`${product.subtittle}`} </div>
            <div className={styles.badgediv}>
              <ul className={styles.badgeul}>
                <li tabindex="0" role="button" className={styles.badgeli}>
                  {`${product.badge}`}
                </li>
              </ul>
            </div>
            <div className={styles.reviewstar}>
              <span className={styles.starwrap}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
                  <path
                    fill="#2E2F3A"
                    d="M1.536 7c-.03 0-.06-.015-.09-.03a.162.162 0 01-.06-.161l.66-2.412-1.98-1.573c-.06-.03-.076-.103-.06-.162a.144.144 0 01.134-.103l2.552-.133.915-2.338c.03-.044.09-.088.15-.088s.12.044.135.088l.916 2.338 2.551.133c.06 0 .12.044.135.103a.164.164 0 01-.045.162L5.47 4.397l.66 2.412a.145.145 0 01-.06.162c-.045.029-.12.044-.165 0L3.757 5.618 1.611 6.97c-.03.03-.045.03-.075.03z"
                  ></path>
                </svg>
              </span>
              <span className={styles.starwrap}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
                  <path
                    fill="#2E2F3A"
                    d="M1.536 7c-.03 0-.06-.015-.09-.03a.162.162 0 01-.06-.161l.66-2.412-1.98-1.573c-.06-.03-.076-.103-.06-.162a.144.144 0 01.134-.103l2.552-.133.915-2.338c.03-.044.09-.088.15-.088s.12.044.135.088l.916 2.338 2.551.133c.06 0 .12.044.135.103a.164.164 0 01-.045.162L5.47 4.397l.66 2.412a.145.145 0 01-.06.162c-.045.029-.12.044-.165 0L3.757 5.618 1.611 6.97c-.03.03-.045.03-.075.03z"
                  ></path>
                </svg>
              </span>
              <span className={styles.starwrap}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
                  <path
                    fill="#2E2F3A"
                    d="M1.536 7c-.03 0-.06-.015-.09-.03a.162.162 0 01-.06-.161l.66-2.412-1.98-1.573c-.06-.03-.076-.103-.06-.162a.144.144 0 01.134-.103l2.552-.133.915-2.338c.03-.044.09-.088.15-.088s.12.044.135.088l.916 2.338 2.551.133c.06 0 .12.044.135.103a.164.164 0 01-.045.162L5.47 4.397l.66 2.412a.145.145 0 01-.06.162c-.045.029-.12.044-.165 0L3.757 5.618 1.611 6.97c-.03.03-.045.03-.075.03z"
                  ></path>
                </svg>
              </span>
              <span className={styles.starwrap}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7">
                  <path
                    fill="#2E2F3A"
                    d="M1.536 7c-.03 0-.06-.015-.09-.03a.162.162 0 01-.06-.161l.66-2.412-1.98-1.573c-.06-.03-.076-.103-.06-.162a.144.144 0 01.134-.103l2.552-.133.915-2.338c.03-.044.09-.088.15-.088s.12.044.135.088l.916 2.338 2.551.133c.06 0 .12.044.135.103a.164.164 0 01-.045.162L5.47 4.397l.66 2.412a.145.145 0 01-.06.162c-.045.029-.12.044-.165 0L3.757 5.618 1.611 6.97c-.03.03-.045.03-.075.03z"
                  ></path>
                </svg>
              </span>
              <span className={styles.starwrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="7"
                  viewBox="0 0 15 14"
                >
                  <path
                    fill="#2E2F3A"
                    d="M7.5 0a.3.3 0 00-.28.188L5.37 4.863l-5.085.255a.3.3 0 00-.27.202.29.29 0 00.095.32l3.96 3.174-1.3 4.816a.291.291 0 00.113.314c.1.071.235.075.34.01L7.5 11.26l4.278 2.692a.305.305 0 00.339-.01.291.291 0 00.113-.313l-1.3-4.816 3.96-3.175a.29.29 0 00.095-.32.3.3 0 00-.27-.201L9.63 4.863 7.78.188A.3.3 0 007.5 0zm0 1l1.664 4.166a.304.304 0 00.268.188L14 5.581l-3.558 2.826a.29.29 0 00-.102.304L11.51 13l-3.845-2.397a.312.312 0 00-.33 0L3.49 13l1.17-4.29a.29.29 0 00-.102-.303L1 5.58l4.568-.227a.304.304 0 00.268-.188L7.5 1z"
                  ></path>
                </svg>
              </span>
              <span
                className={styles.reviewcount}
              >{`${product.totalreview}`}</span>
            </div>
            <div className={styles.price1}>
              <span className={styles.offprice}>
                <span>{`${product.price}`}</span>
              </span>
              <span
                className={styles.pricediscountprice}
              >{`${product.orignalprice}`}</span>
              <span
                className={styles.priceoffer}
              >{`${product.percentoff}`}</span>
            </div>

            <button className={styles.viewbtn}>View</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Horizontal;

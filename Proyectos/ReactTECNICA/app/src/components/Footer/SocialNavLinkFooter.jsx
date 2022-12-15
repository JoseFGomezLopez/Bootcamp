import { Link } from "react-router-dom"

import facebook from "../../assets/social/facebook-white.svg"
import twitter from "../../assets/social/twitter-white.svg"
import instagram from "../../assets/social/instagram-white.svg"
import appStore from "../../assets/store/app-store.svg"
import josu from "../../assets/store/play-store.svg" 
import microsoft from "../../assets/store/windows-store.svg"

const SocialNavLinkFooter = () => {
  return (
    <section className="bottomFooter">
    <div className="social">
      <a target="_blank" href="https://www.facebook.com">
        <img src={facebook} height="40" width="40"/>
      </a>
      <Link to="https://www.twitter.com">
        <img src={twitter}  height="40" width="40"/>
      </Link>
      <a target="_blank" href="https://www.instagram.com">
        <img src={instagram} height="40" width="40"/>
      </a>
    </div>
    <div className="logos">
      <a target="_blank" href="https://www.apple.com/es/?afid=p238%7Cs1IWhWkw0-dc_mtid_187079nc38483_pcrid_629119823958_pgrid_16626051635_pntwk_g_pchan__pexid__&cid=aos-es-kwgo-brand--slid--bran-product-">
        <img src={appStore} />
      </a>
      <a target="_blank" href="https://play.google.com/store/apps?utm_source=emea_Med&utm_medium=hasem&utm_content=Sep2022&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-es-1001280-Med-hasem-ap-Evergreen-Sep2022-Text_Search_SKWS&gclid=CjwKCAjw8JKbBhBYEiwAs3sxN1i2_pfWPO5hq14RrsMDzONgyFcmeZEQhFbqox28Y6jW_M1jrlWPIBoCqXYQAvD_BwE&gclsrc=aw.ds">
        <img src={josu} />
      </a>
      <a target="_blank" href="https://www.microsoft.com/es-ad/store/b/home">
        <img src={microsoft} width={135}  />
      </a>
    </div>
  </section>
  )
}

export default SocialNavLinkFooter
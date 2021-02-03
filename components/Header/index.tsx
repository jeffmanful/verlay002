import { HeaderComp, HeaderContent } from "./styled";
import Headroom from "react-headroom";

const Header = (): JSX.Element => {
  return (
    <HeaderComp>
      <Headroom>
        <HeaderContent>
          <div className="wrap">
            <h2>002</h2>
          </div>
        </HeaderContent>
      </Headroom>
    </HeaderComp>
  );
};

export default Header;

import Wrapper from "../layout/wrapper";
import Insurance from "./home/insurance";
import RealState from"./home/real-estate";
import Portfolio from "./home/personal-portfolio"

const MainRoot = () => {
  return (
    <Wrapper>
      <Portfolio />
    </Wrapper>
  );
};

export default MainRoot;

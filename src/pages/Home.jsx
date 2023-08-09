import Logo from "../components/Logo";

function Home() {
  return (
    <div>
          <h2>홈페이지</h2>
          
          <Logo />
          <Logo color ="blue"/>
          <Logo color="sky" size={108} />
          <Logo color="rose" size={12} />
    </div>
  );
}

export default Home;

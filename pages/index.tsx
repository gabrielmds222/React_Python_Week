import type { NextPage } from "next";

function Botao(props) {
  return <a href="https://github.com/gabrielmds222">{props.address}</a>;
}

const Home: NextPage = () => {
  return (
    <div>
      <Botao address="github" /> <br />
      <Botao address="google" /> <br />
      <Botao address="linkedin" /> <br />
    </div>
  );
};

export default Home;

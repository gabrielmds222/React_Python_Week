import type { NextPage } from "next";

function Botao(props) {
  return <a href={props.address}>{props.title}</a>;
}

const Home: NextPage = () => {
  return (
    <div>
      <Botao title="github" address="https://github.com/gabrielmds222" /> <br />
      <Botao title="google" address="https://www.google.com.br/" /> <br />
      <Botao
        title="linkedin"
        address="https://www.linkedin.com/mynetwork/"
      />{" "}
      <br />
    </div>
  );
};

export default Home;

import NavBar from "../common/navbar";
import "../../styles/404.css";

export default function Page404() {
  return (
    <>
      <NavBar border={true} />
      <h1 id="msg404">Sorry, this page doesn't exist</h1>
    </>
  );
}

import logoImg from '../assets/logo.jpg';
import Button from "../components/Button";


export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo"/>
        <h1>TikkaTickle</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}

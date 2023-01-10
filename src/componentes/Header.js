import { useNavigate } from "react-router-dom";
import { goToHome, goToProfile } from "../router/coordenation";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <button
        onClick={() => {
          goToHome(navigate);
        }}
      >
        {" "}
        ir para página inicial
      </button>
      <button
        onClick={() => {
          goToProfile(navigate);
        }}
      >
        ir para página de perfil
      </button>
    </header>
  );
}

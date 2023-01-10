import { useParams } from "react-router-dom";
export default function PaginaProdutos() {
  // para acessar o id
  const params = useParams();
  console.log(params.id);
  return <>Pagina de produtos </>;
}

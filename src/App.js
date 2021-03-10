import React from 'react';
import Produto from './Produto';

function App() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto'); /// eu defini a chave como produto no setItem
    if (produtoLocal !== null) setProduto(produtoLocal);
    //console.log(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto); /// aqui estou dizendo que essa função sempre irá ocorrer quando o 'produto' mudar e quando mudar, ele irá salvar a preferência no localStorage do navegador; para acessar o localStorage eu vou em aplication -> localStorage no console do navegador;
  }, [produto]);

  function handleClick({ target }) {
    // console.log(event.target.innerText);
    setProduto(target.innerText);
    //console.log(produto);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
}

export default App;

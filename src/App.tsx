import './App.css'
import dados from "./ufjf-dcc207-2024-3-a-atv05.json";
import Funcionario from "./Funcionario"

function App(){ 


return( 
  <div>
      
    <Funcionario 
      nomeCompleto= {dados.funcionarios[0].nome_completo}
      setor={dados.funcionarios[0].setor}
      dataAdmissao={dados.funcionarios[0].data_admissao}
      salarioBase={dados.funcionarios[0].salario_base}
    >


    </Funcionario>


  </div>
)
}

export default App

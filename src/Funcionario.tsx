import "./Funcionario.css"

interface FuncionarioProps{

  nomeCompleto:string;
  setor:string;
  dataAdmissao:string;
  salarioBase:number;

}


    
export default function Funcionario({nomeCompleto, setor, dataAdmissao, salarioBase}:FuncionarioProps){ 
    
  return( 
    <div>
        
      <div>Nome Completo: {nomeCompleto}</div>
      <div>Setor: {setor}</div>
      <div>Data_admissao: {dataAdmissao}</div>
      <div>Salário base: {salarioBase}</div>

    </div>
)
}
const TemplateExpression = () => {
  
  const name = "Guilherme Terra";
  const obj = {
    age: 20,
    job: "Desenvolvedor"
  }

    return (
    <div>
        <p>A soma é: { 2 + 2 }</p>
        <p>Olá! me chamo { name }</p>
        <p>Tenho { obj.age } anos e sou um { obj.job }</p>
    </div>
  )
}

export default TemplateExpression
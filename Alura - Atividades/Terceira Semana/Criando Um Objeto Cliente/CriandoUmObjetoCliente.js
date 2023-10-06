function cadastrar() {
     

    const cliente = {
      dataNascimento: document.getElementById('dataNascimento').value,
      cpf: document.getElementById('cpf').value,
      nomeCompleto: document.getElementById('nomeCompleto').value,
      email: document.getElementById('email').value,
      celular: document.getElementById('celular').value,
      telefone: document.getElementById('telefone').value,
      endereco: document.getElementById('endereco').value,
      cidadeEstado: document.getElementById('cidadeEstado').value,
      profissao: document.getElementById('profissao').value,
      salario: document.getElementById('salario').value,
      senha: document.getElementById('senha').value,
    };
    
    clientes.push(cliente);

    alert('Cadastro realizado com sucesso!');
  }

  const clientes = [];

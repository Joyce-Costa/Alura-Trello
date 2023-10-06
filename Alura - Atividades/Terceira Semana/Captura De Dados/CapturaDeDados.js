function validarDataNascimento(data) {
    const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
    return regexData.test(data);
}

function validarCPF(cpf) {
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regexCPF.test(cpf);
}

function validarTelefone(telefone) {
    const regexTelefone = /^\d{10,}$/;
    return regexTelefone.test(telefone);
}

function validarCelular(celular) {
    const regexCelular = /^\d{11,}$/;
    return regexCelular.test(celular);

}function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validarSenha(senha) {
    const regexSenha = /^\d{4}$/;
    const sequenciaNumerica = '01234567890';

    if (!regexSenha.test(senha)) {
        return false;
    }

    for (let i = 0; i < sequenciaNumerica.length - 3; i++) {
        if (senha.includes(sequenciaNumerica.substr(i, 4))) {
            return false;
        }
    }

    return true;
}

function cadastrar() {
    const dataNascimento = document.getElementById('dataNascimento').value;

    if (!validarDataNascimento(dataNascimento)) {
        alert('Formato de data inválido. Por favor, siga o formato DD/MM/AAAA.');
        return;
    }

    const cpf = document.getElementById('cpf').value;
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const email = document.getElementById('email').value;

    if (!validarCPF(cpf)) {
        alert('Formato de CPF inválido. Por favor, siga o formato xxx.xxx.xxx-xx.');
        return;
    } else if (!validarEmail(email)) {
        alert('Formato de e-mail inválido. Por favor, insira um e-mail válido.');
        return;
    }

    const celular = document.getElementById('celular').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const cidadeEstado = document.getElementById('cidadeEstado').value;
    const profissao = document.getElementById('profissao').value;
    const salario = document.getElementById('salario').value;
    const senha = document.getElementById('senha').value;

    if (!validarCelular(celular)) {
        alert('Formato de número de celular inválido. Por favor, insira um número de celular válido.');
        return;
    } else if (!validarTelefone(telefone) && telefone !== '') {
        alert('Formato de número de telefone inválido. Por favor, insira um número de telefone válido ou deixe em branco.');
        return;
    } else if (!validarSenha(senha)) {
        alert('Formato de senha inválido. Por favor, insira uma senha de 4 números, sem repetições ou sequências.');
        return;
    }

    alert('Cadastro realizado com sucesso!');
};

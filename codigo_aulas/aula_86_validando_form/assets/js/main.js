class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => { 
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.isValidFields();
        const senhasValidas = this.isValidPasswords();

        if(camposValidos && senhasValidas){
            alert(`formulário enviado`);
            this.formulario.submit();
        }
    }

    isValidPasswords(){
        let valid = true;

        const senha = document.querySelector('.senha');
        const repetirSenha = document.querySelector('.repetirSenha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, `Os campos senha e repetir senha devem ser iguais`);
            this.criaErro(repetirSenha, `Os campos senha e repetir senha devem ser iguais`);
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, `A senha precisa conter entre 6 a 12 caracteres`);
        }

        return valid;
    }

    isValidFields() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaErro(campo, `O campo ${label} não pode estar vazio`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaCpf(campo){
        const cpf = new ValidaCpf(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo,'cpf inválido');
            return false;
        }

        return true;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12){
            this.criaErro(campo,'o Usuário deve ter entre 3 e 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo,'o Usuário deve ter apenas letras e/ou números');
            valid = false;
        }

        return valid;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();
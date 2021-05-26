import React from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';

class Principal extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            nome: '',
            email: '',
            cidade: '',
            estado: '',
            telefone: '',
            data: []
        }
    }

    camposDigitados = (elemento) => {
        this.setState({
            [elemento.target.name]: elemento.target.value
        })
    }

    cadastrarUsuario = (botao) => {
        botao.preventDefault();

        console.log(this.state);
        var copyData = [...this.state.data];

        copyData.push({
            nome: this.state.nome,
            email: this.state.email,
            cidade: this.state.cidade,
            estado: this.state.estado,
            telefone: this.state.telefone
        });

        this.setState({
            data: copyData
        })

        this.setState({
            nome: '',
            email: '',
            cidade: '',
            estado: '',
            telefone: '',
        })
    }

    render() {
        return (
            <div>
                <h5>Preencha os dados abaixo para se cadastrar</h5>
                <Formulario dadosInputs={this.camposDigitados} cadastro={this.cadastrarUsuario} campoNome={this.state.nome} campoEmail={this.state.email} campoCidade={this.state.cidade} campoEstado={this.state.estado} campoTelefone={this.state.telefone} />
                <Tabela dados={this.state.data} />
            </div>
        )
    }
}

export default Principal;
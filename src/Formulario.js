import React from 'react';

class Formulario extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.cadastro}>
                <label>Nome: </label>
                <input type="text" value={this.props.campoNome} name="nome" placeholder="Digite seu nome..." className="form-control" onChange={this.props.dadosInputs} />
                <label>E-mail: </label>
                <input type="email" value={this.props.campoEmail} name="email" placeholder="Digite seu e-mail..." className="form-control" onChange={this.props.dadosInputs} />
                <label>Cidade: </label>
                <input type="text" value={this.props.campoCidade} name="cidade" placeholder="Digite sua cidade..." className="form-control" onChange={this.props.dadosInputs} />
                <label>Estado: </label>
                <input type="text" value={this.props.campoEstado} name="estado" placeholder="Digite seu estado..." className="form-control" onChange={this.props.dadosInputs} />
                <label>Telefone: </label>
                <input type="text" value={this.props.campoTelefone} name="telefone" placeholder="Digite seu telefone..." className="form-control" onChange={this.props.dadosInputs} />
                
                <input type="submit" className="btn btn-primary" value="Cadastrar" />
            </form>
        )
    }
}

export default Formulario;
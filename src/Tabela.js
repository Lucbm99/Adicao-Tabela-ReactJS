import React from 'react';

class Tabela extends React.Component {
    render() {
        return (
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Cidade</td>
                        <td>Estado</td>
                        <td>Telefone</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dados.map((item, index) => {
                        return ( 
                            <tr key={index}>
                                <td>{item.nome}</td>
                                <td>{item.email}</td>
                                <td>{item.cidade}</td>
                                <td>{item.estado}</td>
                                <td>{item.telefone}</td>
                            </tr>
                        );
                    })}                    
                </tbody>
            </table>
        )
    }
}

export default Tabela;
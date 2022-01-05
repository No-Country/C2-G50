import React, {Component} from 'react';

class CoinsSymbol extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api: ''
        }
    }
    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data=> consecuencia(data)
            .catch(error => console.log(error))
        )
}
componentDidMount(){
    console.log('Me monte!');
    this.apiCall('https://api.coingecko.com/api/v3/coins/bitcoin', this.list)
}
list = (data) => {
    console.log(data)
    this.setState(
        {
        api: data.image.large
        }
    )
}
componentDidUpdate() {
    console.log('Me actualice!');
}
render(){
    console.log('Estoy renderizando');

    let contenido;

    if (this.state.api === "") {
        contenido = <p>Cargando...</p>
    } else {
        contenido = <img src={this.state.api}></img>
    }
    return (
        <div>
            {contenido}
        </div>
        );
    }
}

export default CoinsSymbol;


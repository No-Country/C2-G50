import React, {Component} from 'react';

class CoinsLength extends Component {

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
    this.apiCall('https://api.coingecko.com/api/v3/coins/list', this.list)
}
list = (data) => {
    console.log(data)
    this.setState(
        {
        api: data.length
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
        contenido = <p>{this.state.api} </p>
    }
    return (
        <div>
            {contenido}
        </div>
        );
    }
}

export default CoinsLength;


import React from 'react';
import { House } from './House';
import { housesApi } from '../rest/HousesApi.js';

export class CurrentHouses extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.getHouses();
    };

    getHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    renderHouse = async (renderedHouse) => {
        await housesApi.put(renderedHouse);
        this.getHouses();
    }

    render() {
        return(
            <div className='current-houses'>
                {this.state.houses.map((house) => (
                    <House
                       house={house}
                       key={house._id}
                       renderHouse={this.renderHouse}
                       />
                ))}
            </div>
        )
    }
}


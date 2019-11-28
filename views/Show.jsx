const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx')

let moveNames = []
let moveLevel = []
let moveLearnMech = []



class Show extends React.Component {
    render(){
        
        for (const [index, value] of this.props.pokemon.pokemonData.moves.entries()) {
            moveNames.push(<li class="text-center" key={index}>{value.move.name}</li>)
                moveLevel.push(<li class="text-center" key={index}>{value.version_group_details[0].level_learned_at}</li>)
                moveLearnMech.push(<li class="text-center" key={index}>{value.version_group_details[0].move_learn_method.name}</li>)
          }
        return (
            <AppLayout title={ this.props.pokemon.pokemonData.name[0].toUpperCase()+this.props.pokemon.pokemonData.name.slice(1) }>
            <div class="d-flex flex-column align-items-center justify-content-center">
                
                <div calss="text-center">    
                    <img class="text-center" src = {this.props.pokemon.img}></img> 
                </div>
               
                {this.props.pokemon.pokemonData.types.map((types,i) => {
                    return <div>
                        <div class="h5">{types.type.name}</div>
                    </div>
                })}


                        <form action="/pokedex/myteam/" method="POST"> 
                            <input type="hidden" name="id" value = {this.props.pokemon._id} />
                            <input type="submit" value="Add to Team"/>
                        </form>
                        </div>
                <div class="d-flex justify-content-center">
                    <div class="p-2 list-unstyled">
                        <div class="text-md-center h5">Moves</div>
                        {moveNames}
                    </div>
                    <div class="p-2 list-unstyled">
                        <div class="text-md-center h5">Earliest Level</div>
                        {moveLevel}
                    </div>
                    <div class ="p-2 list-unstyled">
                        <div class="text-md-center h5">Learned By</div>
                        {moveLearnMech}
                    </div>
                    
                </div>
            </AppLayout>
        )
    }
}
module.exports = Show;
const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx')

class New extends React.Component {
    render() {
        return (
            <AppLayout title="Edit Pokemon">
                
                <form action="/pokedex" method="POST">
                    Image: <input type="text" name="img" /><br/>
                    <input type="submit" name="" value="Create Pokemon"/>
                </form>
            </AppLayout>
        )
    }
}

module.exports = New;
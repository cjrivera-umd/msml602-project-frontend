import React from 'react'
import { Card, Typography, InputLabel, Select, MenuItem, Button } from '@mui/material'
import './MatchUp.css'
import player_A from '../resources/football-player-A.png'
import player_B from '../resources/football-player-B.png'
import { COUNTRY_CODES } from '../helper.js'

class MatchUp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            teamA: '',
            teamB: ''
        }

    }

    getCountryCode = (team) => {
        if (!team) return '???'

        return COUNTRY_CODES[team]
    }

    getFlagUrl = (team) => {
        if (!team) return 'NONE-FLAG.jpeg'

        return `${this.getCountryCode(team)}-FLAG.png`
    }

    predict = () => {
        const { teamA, teamB} = this.state

        if (!teamA || !teamB || teamA === teamB) {
            alert('Choose two different teams.')
            return
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://msml602-project-backend.onrender.com/prediction', requestOptions)
            .then(response => console.log(response.json()))
    }

    handleTeamAChange = (event) => {
        this.setState({ teamA: event.target.value })
    }

    handleTeamBChange = (event) => {
        this.setState({ teamB: event.target.value })
    }

    render() {
        const {teamA, teamB} = this.state

        return (
            <div className='container'>
                <img className='player' alt='Football' src={player_A} />

                <div className='match-up'>

                    <div className='team-selection'>
                            <Card className='team' variant='elevation'>
                                <InputLabel id='teamA-select-label'>Team A</InputLabel>
                                <Select labelId='teamA-select-label' id='teamA-select' defaultValue='' value={this.teamA} onChange={this.handleTeamAChange} >
                                    {Object.keys(COUNTRY_CODES).map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                                </Select>

                                <div className='selected-team'>
                                    <img className='flag' alt={`${teamA} Flag`} src={require(`../resources/${this.getFlagUrl(teamA)}`)} />
                                    <Typography variant='h4'>{this.getCountryCode(teamA)}</Typography>
                                </div>
                            </Card>

                            <Typography variant='h4'>VS</Typography>

                            <Card className='team' variant='outlined'>
                                <InputLabel id='teamB-select-label'>Team B</InputLabel>
                                <Select labelId='teamB-select-label' id='teamB-select' defaultValue='' value={this.teamB} onChange={this.handleTeamBChange} >
                                    {Object.keys(COUNTRY_CODES).map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                                </Select>


                                <div className='selected-team'>
                                    <img className='flag' alt={`${teamB} Flag`} src={require(`../resources/${this.getFlagUrl(teamB)}`)} />
                                    <Typography variant='h4'>{this.getCountryCode(teamB)}</Typography>
                                </div>
                            </Card>
                        </div>

                        <Button className='predict-button' variant='contained' style={{ backgroundColor: 'green', width: '200px' }} onClick={this.predict}>Predict Winner!</Button>
                </div>

                <img className='player' alt='Football' src={player_B} />
            </div>
        )
    }

}

export default MatchUp
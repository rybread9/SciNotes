class EntryForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      location: '',
      air_temperature: 0,
      meters_downstream: 0,
      stream_width: 0,
      stream_depth: 0,
      water_temperature: 0,
      water_turbidity: 0,
      water_suspended_solids: 0,
      water_ph: 0,
      sediment_size: 0,
      sediment_composition: '',
      foliage_cover: 0,
      flora: '',
      invertebrates: '',
      vertebrates: '',
      additional_observations: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.entry){
      this.setState({
        title: this.props.entry.title,
        location: this.props.entry.location,
        air_temperature: this.props.entry.air_temperature,
        meters_downstream: this.props.entry.meters_downstream,
        stream_width: this.props.entry.stream_width,
        stream_depth: this.props.entry.stream_depth,
        water_temperature: this.props.entry.water_temperature,
        water_turbidity: this.props.entry.water_turbidity,
        water_suspended_solids: this.props.entry.water_suspended_solids,
        water_ph: this.props.entry.water_ph,
        sediment_size: this.props.entry.sediment_size,
        sediment_composition: this.props.entry.sediment_composition,
        foliage_cover: this.props.entry.foliage_cover,
        flora: this.props.entry.flora,
        invertebrates: this.props.entry.invertebrates,
        vertebrates: this.props.entry.vertebrates,
        additional_observations: this.props.entry.additional_observations,
        id: this.props.entry.id
      })
    }
  }
  handleChange (event) {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render(){
    return(
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='title'>Title: </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='title'
              ref='title'
              onChange={this.handleChange}
              value={this.state.title}
               />
          </div>
          <label className='label' for='location'>Location: </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='location'
              ref='location'
              onChange={this.handleChange}
              value={this.state.location}
               />
          </div>
          <label className='label' for='air_temperature'>Air Temperature: </label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='air_temperature'
              ref='air_temperature'
              onChange={this.handleChange}
              value={this.state.air_temperature}
              />
          </div>
          <h1>Water</h1>
          <label className='label' for='meters_downstream'>Meters Downstream: </label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='meters_downstream'
              ref='meters_downstream'
              onChange={this.handleChange}
              value={this.state.meters_downstream}
              />
          </div>
          <label className='label' for='stream_width'>Stream Width: </label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='stream_width'
              ref='stream_width'
              onChange={this.handleChange}
              value={this.state.stream_width}
              />
          </div>
          <label className='label' for='stream_depth'>Stream Depth: </label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='stream_depth'
              ref='stream_depth'
              onChange={this.handleChange}
              value={this.state.stream_depth}
              />
          </div>
          <label className='label' for='water_temperature'>Water Temperature: </label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='water_temperature'
              ref='water_temperature'
              onChange={this.handleChange}
              value={this.state.water_temperature}
              />
          </div>
          <label className='label' for='water_turbidity'>Water Turbidity: </label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='water_turbidity'
              ref='water_turbidity'
              onChange={this.handleChange}
              value={this.state.water_turbidity}
              />
          </div>
          <label className='label' for='water_suspended_solids'>Suspended Solids: </label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='water_suspended_solids'
              ref='water_suspended_solids'
              onChange={this.handleChange}
              value={this.state.water_suspended_solids}
              />
          </div>
          <label className='label' for='water_ph'>Water pH: </label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='water_ph'
              ref='water_ph'
              onChange={this.handleChange}
              value={this.state.water_ph}
              />
          </div>
          <h1>Sediment</h1>
          <label className='label' for='sediment_size'>Sediment Size: </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='sediment_size'
              ref='sediment_size'
              onChange={this.handleChange}
              value={this.state.sediment_size}
              />
          </div>
          <label className='label' for='sediment_composition'>Sediment Composition: </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='sediment_composition'
              ref='sediment_composition'
              onChange={this.handleChange}
              value={this.state.sediment_composition}
              />
          </div>
          <h1>Plant Life</h1>
          <label className='label' for='foliage_cover'>Foliage Cover: </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='foliage_cover'
              ref='foliage_cover'
              onChange={this.handleChange}
              value={this.state.foliage_cover}
              />
          </div>
          <label className='label' for='flora'>Flora: </label>
          <div className='control'>
          <input
            className='input'
            type='text'
            id='flora'
            ref='flora'
            onChange={this.handleChange}
            value={this.state.flora}
            />
          </div>
          <h1>Animal Life</h1>
          <label className='label' for='invertebrates'>Invertebrates: </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='invertebrates'
              ref='invertebrates'
              onChange={this.handleChange}
              value={this.state.invertebrates}
              />
          </div>
          <label className='label' for='vertebrates'>Vertebrates: </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='vertebrates'
              ref='vertebrates'
              onChange={this.handleChange}
              value={this.state.vertebrates}
              />
          </div>
          <h1>Additional Observations</h1>
          <label className='label' for='additional_observations'>Additional Observations: </label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='additional_observations'
              ref='additional_observations'
              onChange={this.handleChange}
              value={this.state.additional_observations}
              />
          </div>
          <div className='control'>
            <input className='button is-primary' type='submit' />&nbsp;
            <button className='button is-link' onClick={()=> this.props.toggleState('entriesListIsVisible', 'addEntryIsVisible')}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

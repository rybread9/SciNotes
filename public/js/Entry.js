class Entry extends React.Component {
  constructor(props){
    super(props)
    this.toggleFormState = this.toggleFormState.bind(this)
    this.confirmDelete = this.confirmDelete.bind(this)
    this.state = {
      editEntryIsVisible: false
    }
  }
  toggleFormState(st){
    this.setState({
      [st]: !this.state[st]
    })
  }
  confirmDelete(){
    console.log("confirm delete is running");
    const confirm = window.confirm("Yes, I want to delete this entry.")

    if (confirm == true) {
      console.log(this.props.entry)
      console.log(this.props.index)
      this.props.deleteEntry(this.props.entry, this.props.index)
      this.props.toggleState('entryIsVisible', 'entriesListIsVisible')
    } else {

    }
    // let confirm = prompt("Are you sure you wish to delete this entry?", "yes/no")
    // if (confirm = "yes") {
    //   this.props.deleteEntry(this.props.entry, this.props.index)
    //   this.props.toggleState('entryIsVisible', 'entriesListIsVisible');
    // } else {
    //
    // }
  }
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <button className='button is-outlined is-success is-medium' onClick={()=> this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}>Return to Entries</button>
        </div>
        <br />
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div className='tile'>
              <div>
                <h3 className='tile is-child box'><span>Title: </span>{this.props.entry.title}</h3>
                <p className='tile is-child box'><span>Location: </span>{this.props.entry.location}</p>
                <p className='tile is-child box'><span>Air Temperature: </span>{this.props.entry.air_temperature}</p>
                <p className='tile is-child box'><span>Meters Downstream: </span>{this.props.entry.meters_downstream}</p>
                <p className='tile is-child box'><span>Stream Width: </span>{this.props.entry.stream_width}</p>
                <p className='tile is-child box'><span>Stream Depth: </span>{this.props.entry.stream_depth}</p>
                <p className='tile is-child box'><span>Water Temperature: </span>{this.props.entry.water_temperature}</p>
                <p className='tile is-child box'><span>Water Turbidity: </span>{this.props.entry.water_turbidity}</p>
                <p className='tile is-child box'><span>Suspended Solids: </span>{this.props.entry.water_suspended_solids}</p>
                <p className='tile is-child box'><span>Water pH: </span>{this.props.entry.water_ph}</p>
                <p className='tile is-child box'><span>Sediment Size: </span>{this.props.entry.sediment_size}</p>
                <p className='tile is-child box'><span>Sediment Composition: </span>{this.props.entry.sediment_composition}</p>
                <p className='tile is-child box'><span>Foliage Cover: </span>{this.props.entry.foliage_cover}</p>
                <p className='tile is-child box'><span>Flora: </span>{this.props.entry.flora}</p>
                <p className='tile is-child box'><span>Invertebrates: </span>{this.props.entry.invertebrates}</p>
                <p className='tile is-child box'><span>Vertebrates: </span>{this.props.entry.vertebrates}</p>
                <p className='tile is-child box'><span>Additional Observations: </span>{this.props.entry.additional_observations}</p>
              </div><br />
              <div className='tile'>
                <button className='button is-info is-outlined is-medium' onClick={ ()=> this.toggleFormState( 'editEntryIsVisible')}>Edit</button>
              </div>
              <div className='tile'>
                <button className='button is-danger is-medium' onClick={this.confirmDelete}>Delete</button>
              </div>

            </div>
          </div>
          {this.state.editEntryIsVisible
           ? <EntryForm toggleState={this.toggleState} entry={this.props.entry} handleSubmit={this.props.handleSubmit}/>
            : ''}
        </div>
      // </div>
    )
  }
}

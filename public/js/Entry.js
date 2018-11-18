class Entry extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div className='tile'>
              <div>
                <h3 className='tile is-child box'><span>Title:</span>{this.props.entry.title}</h3>
                <p className='tile is-child box'><span>Location:</span>{this.props.entry.location}</p>
                <p className='tile is-child box'><span>Air Temperature:</span>{this.props.entry.air_temperature}</p>
                <p className='tile is-child box'><span>Meters Downstream:</span>{this.props.entry.meters_downstream}</p>
                <p className='tile is-child box'><span>Stream Width:</span>{this.props.entry.stream_width}</p>
                <p className='tile is-child box'><span>Stream Depth:</span>{this.props.entry.stream_depth}</p>
                <p className='tile is-child box'><span>Water Temperature:</span>{this.props.entry.water_temperature}</p>
                <p className='tile is-child box'><span>Water Turbidity:</span>{this.props.entry.water_turbidity}</p>
                <p className='tile is-child box'><span>Suspended Solids:</span>{this.props.entry.water_suspended_solids}</p>
                <p className='tile is-child box'><span>Water pH:</span>{this.props.entry.water_ph}</p>
                <p className='tile is-child box'><span>Sediment Size:</span>{this.props.entry.sediment_size}</p>
                <p className='tile is-child box'><span>Sediment Composition:</span>{this.props.entry.sediment_composition}</p>
                <p className='tile is-child box'><span>Foliage Cover:</span>{this.props.entry.foliage_cover}</p>
                <p className='tile is-child box'><span>Flora:</span>{this.props.entry.flora}</p>
                <p className='tile is-child box'><span>Invertebrates:</span>{this.props.entry.invertebrates}</p>
                <p className='tile is-child box'><span>Vertebrates:</span>{this.props.entry.vertebrates}</p>
                <p className='tile is-child box'><span>Additional Observations:</span>{this.props.entry.additional_observations}</p>
              </div>
              <div className='tile'>
              </div>
            <div className='tile'>
              <button className='button is-warning' onClick={()=> this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}>Return to Entries</button>
            </div>
            </div>
          </div>
          <EntryForm />
        </div>
      </div>
    )
  }
}

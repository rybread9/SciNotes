class Entry extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div className='tile'>
              <div>
                <h3 className='tile is-child box'><span>Title:</span></h3>
                <p className='tile is-child box'><span>Location:</span></p>
                <p className='tile is-child box'><span>Air Temperature:</span></p>
                <p className='tile is-child box'><span>Meters Downstream:</span></p>
                <p className='tile is-child box'><span>Stream Width:</span></p>
                <p className='tile is-child box'><span>Stream Depth:</span></p>
                <p className='tile is-child box'><span>Water Temperature:</span></p>
                <p className='tile is-child box'><span>Water Turbidity:</span></p>
                <p className='tile is-child box'><span>Suspended Solids:</span></p>
                <p className='tile is-child box'><span>Water pH:</span></p>
                <p className='tile is-child box'><span>Sediment Size:</span></p>
                <p className='tile is-child box'><span>Sediment Composition:</span></p>
                <p className='tile is-child box'><span>Foliage Cover:</span></p>
                <p className='tile is-child box'><span>Flora:</span></p>
                <p className='tile is-child box'><span>Invertebrates:</span></p>
                <p className='tile is-child box'><span>Vertebrates:</span></p>
                <p className='tile is-child box'><span>Additional Observations:</span></p>
              </div>
              <div className='tile'>
              </div>
            <div className='tile'>
              <button className='button is-warning'>Return to Entries</button>
            </div>
            </div>
          </div>
          <EntryForm />
        </div>
      </div>   
    )
  }
}

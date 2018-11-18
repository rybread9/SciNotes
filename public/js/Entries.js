class Entries extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      entriesListIsVisible: true,
      addEntryIsVisible: false,
      entryIsVisible: false,
      editEntryIsVisible: false,
      entries: []
    }
      this.toggleState = this.toggleState.bind(this)
      this.getEntries = this.getEntries.bind(this)
    }
    toggleState (st1, st2) {
      this.setState({
        [st1]: !this.state[st1],
        [st2]: !this.state[st2]
      })
  }
  componentDidMount() {
    this.getEntries()
  }
  getEntries () {
    fetch('/entries')
      .then( response => response.json())
      .then( data => {
        this.setState({
          entries: data
        })
      }).catch(error => console.log(error))
  }
  render(){
    return(
      <div>
        <h2>Entries</h2>
        {
          this.state.entriesListIsVisible
          ? <button
              className='button is-success' onClick={()=>this.toggleState('addEntryIsVisible', 'entriesListIsVisible')}>
                Add an Entry
            </button>
          : ''
        }
        {
          this.state.entriesListIsVisible
          ? <EntriesList
              toggleState={this.toggleState}
              entries={this.state.entries}
            />
          : ''
        }
        {
          this.state.addEntryIsVisible
          ? <EntryForm
              toggleState={this.toggleState}
            />
          : ''
        }
        {
          this.state.entryIsVisible
          ? <Entry
              toggleState={this.toggleState}
            />
          : ''
        }
      </div>
    )
  }
}

// <div className="overview">
//   Study Title: {this.state.entries[0].title}
//   Location: {this.state.entries[0].location}
//   Common Flora: {this.state.entries[0].flora}
//   Sediment Composition: {this.state.entries[0].sediment_composition}
// </div>

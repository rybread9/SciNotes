class Entries extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      entriesListIsVisible: true,
      addEntryIsVisible: false,
      entryIsVisible: false,
      editEntryIsVisible: false,
      entries: [],
      entry: {}
    }
      this.toggleState = this.toggleState.bind(this)
      this.getEntry = this.getEntry.bind(this)
      this.deleteEntry = this.deleteEntry.bind(this)
      this.handleCreate = this.handleCreate.bind(this)
      this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
      this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
      this.getEntries = this.getEntries.bind(this)
    }

  componentDidMount() {
    this.getEntries();
  }

  deleteEntry(entry, index) {
    fetch('/entries/' + entry.id,
      {
          method: 'DELETE'
      })
      .then(data => {
        this.setState({
          entries: [
            ...this.state.entries.slice(0, index),
            ...this.state.entries.slice(index + 1)
          ]
        })
      })
  }

  handleCreate (entry) {
    // const updatedEntries = this.state.entries
    // updatedEntries.unshift(entry)
    this.setState({entries: [entry, ...this.state.entries]})
  }

  handleCreateSubmit (entry) {
    fetch('/entries', {
      body: JSON.stringify(entry),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdEntry => {
        return createdEntry.json()
      })
      .then(jsonedEntry => {
        // console.log(jsonedEntry);
        this.handleCreate(jsonedEntry)
        this.toggleState('addEntryIsVisible', 'entriesListIsVisible')
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleUpdateSubmit (entry) {
    fetch('/entries/' + entry.id, {
      body: JSON.stringify(entry),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedEntry => {
        return updatedEntry.json()
      })
      .then(jsonedEntry => {
        this.getEntries()
        this.toggleState('entriesListIsVisible', 'entryIsVisible')
      })
      .catch(error => console.log(error))
  }

  getEntry(entry) {
    this.setState({entry: entry})
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

  toggleState (st1, st2) {
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2],
    })
  }

  render(){
    return(
      <div className='column is-mobile'>

        {
          this.state.entriesListIsVisible
          ? <button
              className='button is-success is-outlined is-medium' onClick={()=>this.toggleState('addEntryIsVisible', 'entriesListIsVisible')}>
                Add an Entry
            </button>
          : ''
        }
        {
          this.state.entriesListIsVisible
          ? <EntriesList
              toggleState={this.toggleState}
              entries={this.state.entries}
              getEntry={this.getEntry}
              deleteEntry={this.deleteEntry}
            />
          : ''
        }
        {
          this.state.addEntryIsVisible
          ? <EntryForm
              toggleState={this.toggleState}
              handleCreate={this.handleCreate}
              handleSubmit={this.handleCreateSubmit}
            />
          : ''
        }
        {
          this.state.entryIsVisible
          ? <Entry
              toggleState={this.toggleState}
              entry={this.state.entry}
              handleSubmit={this.handleUpdateSubmit}
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

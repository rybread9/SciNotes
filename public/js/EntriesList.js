class EntriesList extends React.Component {
  render(){
    return(

        <div className="column is-centered">
          <div className="overview">
            <h3 className="title is-4">Study Overview</h3>

            <div>
              <h3 className="subtitle is-6">Title: {this.props.entries[0].title}</h3>
              <h3 className="subtitle is-6">Study Descritption: A study on the Redmond Forge Stream.</h3>
              <h3 className="subtitle is-6">Location: {this.props.entries[0].location}</h3>
            </div>
          </div>

          

          <table className="table is-multilined is-bordered is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <h2><strong>Entry id #</strong></h2>
                </th>
                <th>
                    <h2><strong>Meters Downstream</strong></h2>
                </th>
                <th>
                  <h2> </h2>
                </th>
              </tr>
            </thead>
            <tbody>

              {this.props.entries.map((entry, index) => {
                return (
                  <tr>
                    <td onClick={()=> {this.props.getEntry(entry); this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}}>
                      <h3>{entry.id}</h3>
                    </td>
                    <td onClick={()=> {this.props.getEntry(entry); this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}}>
                      <h3>{entry.meters_downstream}</h3>
                    </td>
                    <td onClick={()=> {this.props.getEntry(entry); this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}}>
                      <img className="arrow" src="/images/right1.png" alt="Click for details" />
                    </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      )
    }
}
// <td>
//     <button className='button is-warning is-small'>Edit</button>
// </td>
// <td>
//     <button className='button is-warning is-small' onClick={()=> this.props.deleteEntry(entry, index)}>Delete</button>
// </td>

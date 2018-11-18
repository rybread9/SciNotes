class EntriesList extends React.Component {
render(){
  return(
    <div className="container">
      <h1>Data Entries</h1>
      <table>
        <tbody>
          {this.props.entries.map((entry, index) => {
            return (
              <tr>
                <td onClick={()=> {this.props.getEntry(entry); this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}}>
                  <h3>{entry.name}</h3>
                </td>
                <td>
                    <button className='button is-warning is-small'>Edit</button>
                </td>
                <td>
                    <button className='button is-warning is-small' onClick={()=> this.props.deleteEntry(entry, index)}>Delete</button>
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

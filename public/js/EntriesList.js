class EntriesList extends React.Component {
  render(){

    return(

        <div className="columns is-multilined is-centered">

          <table>
                  <tr>
                    <th>
                      <h2>id #</h2>
                    </th>
                    <th>
                        <h2>Meters Downstream</h2>
                    </th>
                    <th>
                      <h2> </h2>
                    </th>
                  </tr>
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

// {this.state.overviewIsVisible}

class EntriesList extends React.Component {
  render(){
    return(

        <div className="column is-centered">

          <div className="overview is-info">

            <div onClick={()=>this.toggleState('overviewIsVisible')} class="overviewheader">
              <h3 className="subtitle is-4"><span>Study Overview</span></h3>
            </div>

            <div>
              <h3 className="subtitle is-6"><span class="overviewcontent">Title: {this.props.entries[0].title}</span></h3>
              <h3 className="subtitle is-6"><span class="overviewcontent">Study Descritption: A study on the     &nbsp;&nbsp;&nbsp;Redmond Forge Stream.</span></h3>
              <h3 className="subtitle is-6"><span class="overviewcontent">Location: {this.props.entries[0].location}</span></h3>
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

class EntriesList extends React.Component {
render(){
  return(
    <div className="container">
      <h1>Data Entries</h1>
      <table>
        <tbody>
          <tr>
            <td onClick={()=> this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}>
            </td>
            <td className='entry' onClick={()=> this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}>
              <h3>Test Entry 1</h3>
            </td>
            <td onClick={()=> this.props.toggleState('entriesListIsVisible', 'entryIsVisible')}>
                <button className='button is-warning is-small'>Edit</button>
            </td>
            <td>
                <button className='button is-warning is-small'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>  
    )
  }
}

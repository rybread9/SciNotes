class Entries extends React.Component {
  // constructor(props){
  //   super(props)
  //
  // }
  render(){
    return(
      <div className="container">
        <h1>Data Entries</h1>
        <button className='button is-success'>Add an Entry</button>
        <table>
          <tbody>
            <tr>
              <td className='entry'>
                <h3>Test Entry</h3>
              </td>
              <td>
                  <button className='button is-warning is-small'>Edit</button>
              </td>
              <td>
                  <button className='button is-warning is-small'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <EntryForm />
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

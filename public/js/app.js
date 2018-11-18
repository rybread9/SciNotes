class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <h1 className='title'>SciNotes</h1>
        <div className='column'>
          <Entries />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)

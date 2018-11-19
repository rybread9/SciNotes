class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <header>
          <h1 className='title'>SciNotes</h1>
        </header>
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

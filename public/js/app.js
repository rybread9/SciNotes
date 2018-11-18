class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <h1 className='title'>SciNotes</h1>
        <div className='columns'>
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

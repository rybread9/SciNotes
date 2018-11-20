class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <header>
          <h1 className='title'><img class="logo" src="images/scinotes_logo.png"></img>&#160;<strong>SciNotes</strong></h1>
        </header>
        <em><p>&#160;Lab Data Tracking App</p></em>
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

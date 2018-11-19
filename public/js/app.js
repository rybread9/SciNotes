class App extends React.Component {
  render () {
    return (
      <div className='section'>
        <header>
          <h1 className='title'><strong>SciNotes</strong><img class="logo" src="images/scinotes_logo.png"></img></h1>
        </header>
        <em><p>&#160;&#160;&#160;Lab Data Tracking App</p></em>
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

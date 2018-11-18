class EntryForm extends React.Component {
  render(){
    return(
      <div className="field">

        <form>
          <label className='label' for='title'>Title: </label>
          <div className='control'>
            <input className='input' type='text' id='title' ref='title' />
          </div>
          <label className='label' for='location'>Title: </label>
          <div className='control'>
            <input className='input' type='text' id='location' ref='location' />
          </div>
          <label className='label' for='air_temperature'>Title: </label>
          <div className='control'>
            <input className='input' type='number' id='air_temperature' ref='air_temperature' />
          </div>
          <label className='label' for='meters_downstream'>Title: </label>
          <div className='control'>
            <input className='input' type='number' id='meters_downstream' ref='meters_downstream' />
          </div>
          <label className='label' for='stream_width'>Title: </label>
          <div className='control'>
            <input className='input' type='number' id='stream_width' ref='stream_width' />
          </div>
          <label className='label' for='stream_depth'>Title: </label>
          <div className='control'>
            <input className='input' type='number' id='stream_depth' ref='stream_depth' />
          </div>
          <label className='label' for='water_temperature'>Title: </label>
          <div className='control'>
            <input className='input' type='number' id='water_temperature' ref='water_temperature' />
          </div>
          <label className='label' for='water_turbidity'>Title: </label>
          <div className='control'>
            <input className='input' type='number' id='water_turbidity' ref='water_turbidity' />
          </div>
          <label className='label' for='water_suspended_solids'>Title: </label>
          <div className='control'>
            <input className='input' type='number' id='water_suspended_solids' ref='water_suspended_solids' />
          </div>
          <label className='label' for='water_ph'>Title: </label>
          <div className='control'>
            <input className='input' type='number' id='water_ph' ref='water_ph' />
          </div>
          
        </form>

      </div>
    )
  }
}

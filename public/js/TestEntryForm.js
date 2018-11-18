<label className='label' for='sediment_size'>Sediment Size</label>
<div className='control'>
  <input className='input' type='text' id='sediment_size' ref='sediment_size' />
</div>
<label className='label' for='sediment_composition'>Sediment Composition</label>
<div className='control'>
  <input className='input' type='text' id='sediment_composition' ref='sediment_composition' />
</div>
<label className='label' for='foliage_cover'>Foliage Cover</label>
<div className='control'>
  <input className='input' type='text' id='foliage_cover' ref='foliage_cover' />
</div>
<label className='label' for='flora'>Flora</label>
<div className='control'>
  <input className='input' type='text' id='flora' ref='flora' />
</div>
<label className='label' for='invertebrates'>Invertebrates</label>
<div className='control'>
  <input className='input' type='text' id='invertebrates' ref='invertebrates' />
</div>
<label className='label' for='vertebrates'>Vertebrates</label>
<div className='control'>
  <input className='input' type='text' id='vertebrates' ref='vertebrates' />
</div>
<label className='label' for='additional_observations'>Additional Observations</label>
<div className='control'>
  <input className='input' type='text' id='additional_observations' ref='additional_observations' />
</div>











CREATE TABLE entries (
  id SERIAL,
  title VARCHAR(200),
  location VARCHAR(60),
  air_temperature DEC,
  meters_downstream INT,
  stream_width INT,
  stream_depth INT,
  water_temperature DEC,
  water_turbidity INT,
  water_suspended_solids INT,
  water_ph DEC,
  sediment_size INT,
  sediment_composition VARCHAR(300),
  foliage_cover INT,
  flora VARCHAR(300),
  invertebrates VARCHAR(300),
  vertebrates VARCHAR(300),
  additional_observations VARCHAR(300)
);

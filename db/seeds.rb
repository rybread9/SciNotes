# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# foliage, location, name, title = same across experiment
# description of study site - list main things on front page
# slim down show page by displaying common fields on main page
# how to display? dropdown
# location could tell where to find + date


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

INSERT INTO entries (title, location, air_temperature, meters_downstream, stream_width, stream_depth, water_temperature, water_turbidity, water_suspended_solids, water_ph, sediment_size, sediment_composition, foliage_cover, flora, invertebrates, vertebrates, additional_observations) VALUES ('Redmond Forge Ecosystem Analysis', 'Redmond, WA', 72, 0, 1.5, 20, 54, 250, 2000, 6.2, 5, 'silt, clay, limestone', 70, 'mullein, nettles, cleavers, horsetail, pine', 'snails, caddis flies', '6 salamanders, 1 turtle', 'none');
INSERT INTO entries (title, location, air_temperature, meters_downstream, stream_width, stream_depth, water_temperature, water_turbidity, water_suspended_solids, water_ph, sediment_size, sediment_composition, foliage_cover, flora, invertebrates, vertebrates, additional_observations) VALUES ('Redmond Forge Ecosystem Analysis', 'Redmond, WA', 72, 10, 1.5, 20, 54, 250, 2000, 6.2, 5, 'silt, clay, limestone', 70, 'mullein, nettles, cleavers, horsetail, pine', 'snails, caddis flies', '6 salamanders, 1 turtle', 'none');
INSERT INTO entries (title, location, air_temperature, meters_downstream, stream_width, stream_depth, water_temperature, water_turbidity, water_suspended_solids, water_ph, sediment_size, sediment_composition, foliage_cover, flora, invertebrates, vertebrates, additional_observations) VALUES ('Redmond Forge Ecosystem Analysis', 'Redmond, WA', 72, 20, 1.5, 20, 54, 250, 2000, 6.2, 5, 'silt, clay, limestone', 70, 'mullein, nettles, cleavers, horsetail, pine', 'snails, caddis flies', '6 salamanders, 1 turtle', 'none');
INSERT INTO entries (title, location, air_temperature, meters_downstream, stream_width, stream_depth, water_temperature, water_turbidity, water_suspended_solids, water_ph, sediment_size, sediment_composition, foliage_cover, flora, invertebrates, vertebrates, additional_observations) VALUES ('Redmond Forge Ecosystem Analysis', 'Redmond, WA', 72, 30, 1.5, 20, 54, 250, 2000, 6.2, 5, 'silt, clay, limestone', 70, 'mullein, nettles, cleavers, horsetail, pine', 'snails, caddis flies', '6 salamanders, 1 turtle', 'none');

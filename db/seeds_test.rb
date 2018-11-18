# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# unless we autogenerate timestamp, placeholder indicates which time format they should use, as well as the order, i.e. military or not, time, a.m./p.m. and international timezone
# need to change INT properties for some unless we hardcode which units or we give dropdown menu options with list of all possible units
CREATE TABLE entries (
  id SERIAL,
  title VARCHAR(60),
  location VARCHAR(40),
  timestamp VARCHAR(15)
  water_turbidity INT,
  water_suspended_solids INT,
  water_ph DEC,
  rock_type VARCHAR(25),
  sediment_type VARCHAR(25),
  temperature INT,
  foliage_cover INT,
  flora VARCHAR(60),
  fauna VARCHAR(60),
  additional_observations VARCHAR(300)
)

INSERT INTO entries (title, location, timestamp, water_turbidity, water_suspended_solids, water_ph, rock_type, sediment_type, temperature, foliage_cover, flora, fauna) VALUES ('Redmond Forge Ecosystem Analysis', 'Redmond, WA', '3:15 p.m. PST', '800', '2000', '4.2', 'limestone', 'shale', '70', '40', 'mullein, nettles, cleavers, horsetail, pine', 'deer, racoon, mountain lion, coyote', 'none')

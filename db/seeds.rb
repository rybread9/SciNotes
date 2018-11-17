# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



CREATE TABLE entries (id SERIAL,
meters_downstream INT,
stream_width INT,
stream_depth INT,
sediment_size INT,
foliage_cover INT,
invertebrates VARCHAR(300),
vertebrates VARCHAR(300),
sediment_composition VARCHAR,
dissolved_oxygen INT,
turbidity INT,
suspended_solids INT);

INSERT INTO entries (meters_downstream, stream_width, stream_depth, sediment_size, foliage_cover, invertebrates, vertebrates, sediment_composition, dissolved_oxygen, turbidity, suspended_solids) VALUES (0, 1.5, 20, 5, 80, 'snails, caddis flies', '6 salamanders, 1 turtle', 'silty', 6, 0.3, 0);
INSERT INTO entries (meters_downstream, stream_width, stream_depth, sediment_size, foliage_cover, invertebrates, vertebrates, sediment_composition, dissolved_oxygen, turbidity, suspended_solids) VALUES (10, 1.5, 20, 5, 80, 'snails, caddis flies', '6 salamanders, 1 turtle', 'silty', 6, 0.3, 0);
INSERT INTO entries (meters_downstream, stream_width, stream_depth, sediment_size, foliage_cover, invertebrates, vertebrates, sediment_composition, dissolved_oxygen, turbidity, suspended_solids) VALUES (20, 1.5, 20, 5, 80, 'snails, caddis flies', '6 salamanders, 1 turtle', 'silty', 6, 0.3, 0);
INSERT INTO entries (meters_downstream, stream_width, stream_depth, sediment_size, foliage_cover, invertebrates, vertebrates, sediment_composition, dissolved_oxygen, turbidity, suspended_solids) VALUES (30, 1.5, 20, 5, 80, 'snails, caddis flies', '6 salamanders, 1 turtle', 'silty', 6, 0.3, 0);

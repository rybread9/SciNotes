class Entry
    # ==================================================
    #                      SET UP
    # ==================================================

    # add attribute readers for instance access
    attr_reader :id, :title, :location, :air_temperature, :meters_downstream, :stream_width, :stream_depth, :water_temperature, :water_turbidity, :water_suspended_solids, :water_ph, :sediment_size, :sediment_composition, :foliage_cover, :flora, :invertebrates, :vertebrates, :additional_observations

    #connect to postgres
    DB = PG.connect({
      :host => "localhost",
      :port => 5432,
      :dbname => 'scinotes_development'
    })

    # initialize options hash
    def initialize(opts = {}, id=nil)
      @id = id_to_i
      @title = opts["title"]
      @location = opts["location"]
      @air_temperature = opts["air_temperature"].to_f
      @meters_downstream = opts["meters_downstream"].to_i
      @stream_width = opts["stream_width"].to_i
      @stream_depth = opts["stream_depth"].to_i
      @water_temperature = opts["water_temperature"].to_dec
      @water_turbidity = opts["water_turbidity"].to_i
      @water_suspended_solids = opts["water_suspended_solids"].to_i
      @water_ph = opts["water_ph"].to_f
      @sediment_size = opts["sediment_size"].to_i
      @sediment_composition = opts["sediment_composition"]
      @foliage_cover = opts["foliage_cover"].to_i
      @flora = opts["flora"]
      @invertebrates = opts["invertebrates"]
      @vertebrates = opts["vertebrates"]
      @additional_observations = opts["additional_observations"]
    end

    # ==================================================
    #                  PREPARED STATEMENTS
    # ==================================================


    # ==================================================
    #                      ROUTES
    # ==================================================

    # get all
    def self.all
      results = DB.exec(
        <<-SQL
          SELECT *
          FROM entries;
        SQL
      )
      return results.map do |result|
        {
          "id" => result["id"].to_i,
          "title" => result["title"],
          "location" => result["location"],
          "air_temperature" => result["air_temperature"].to_f,
          "meters_downstream" => result["meters_downstream"].to_i,
          "stream_width" => result["stream_width"].to_i,
          "stream_depth" => result["stream_depth"].to_i,
          "water_temperature" => result["water_temperature"].to_f,
          "water_turbidity" => result["water_turbidity"].to_i,
          "water_suspended_solids" => result["water_suspended_solids"].to_i,
          "water_ph" => result["water_ph"].to_f,
          "sediment_size" => result["sediment_size"].to_i,
          "sediment_composition" => result["sediment_composition"],
          "foliage_cover" => result["foliage_cover"].to_i,
          "flora" => result["flora"],
          "invertebrates" => result["invertebrates"],
          "vertebrates" => result["vertebrates"],
          "additional_observations" => result["additional_observations"]
        }
      end
    end

    # get one (by id)
    def self.find(id)
      results = DB.exec(
        <<-SQL
          SELECT *
          FROM entries
          WHERE id=#{id};
        SQL
      )
      return {
        "id" => results.first["id"].to_i,
        "title" => results.first["title"],
        "location" => results.first["location"],
        "air_temperature" => results.first["air_temperature"].to_f,
        "meters_downstream" => results.first["meters_downstream"].to_i,
        "stream_width" => results.first["stream_width"].to_i,
        "stream_depth" => results.first["stream_depth"].to_i,
        "water_temperature" => results.first["water_temperature"].to_f,
        "water_turbidity" => results.first["water_turbidity"].to_i,
        "water_suspended_solids" => results.first["water_suspended_solids"].to_i,
        "water_ph" => results.first["water_ph"].to_f,
        "sediment_size" => results.first["sediment_size"].to_i,
        "sediment_composition" => results.first["sediment_composition"],
        "foliage_cover" => results.first["foliage_cover"].to_i,
        "flora" => results.first["flora"],
        "invertebrates" => results.first["invertebrates"],
        "vertebrates" => results.first["vertebrates"],
        "additional_observations" => results.first["additional_observations"]
      }
    end

    # delete one (by id)
    def self.delete(id)
      results = DB.exec(
        <<-SQL
          DELETE FROM entries
          WHERE id=#{id};
        SQL
      )
      return {"deleted" => true}
    end

    def self.create(opts)
      results = DB.exec(
        <<-SQL
          INSERT INTO entries
          (title,
            location,
            air_temperature,
            meters_downstream,
            stream_width,
            stream_depth,
            water_temperature,
            water_turbidity,
            water_suspended_solids,
            water_ph,
            sediment_size,
            sediment_composition,
            foliage_cover,
            flora,
            invertebrates,
            vertebrates,
            additional_observations)
          VALUES ('#{opts["title"]}',
                  '#{opts["location"]}',
                  #{opts["air_temperature"]},
                  #{opts["meters_downstream"]},
                  #{opts["stream_width"]},
                  #{opts["stream_depth"]},
                  #{opts["water_temperature"]},
                  #{opts["water_turbidity"]},
                  #{opts["water_suspended_solids"]},
                  #{opts["water_ph"]},
                  #{opts["sediment_size"]},
                  '#{opts["sediment_composition"]}',
                  #{opts["foliage_cover"]},
                  '#{opts["flora"]}',
                  '#{opts["invertebrates"]}',
                  '#{opts["vertebrates"]}',
                  '#{opts["additional_observations"]}')
          RETURNING title,
            location,
            air_temperature,
            meters_downstream,
            stream_width,
            stream_depth,
            water_temperature,
            water_turbidity,
            water_suspended_solids,
            water_ph,
            sediment_size,
            sediment_composition,
            foliage_cover,
            flora,
            invertebrates,
            vertebrates,
            additional_observations;
        SQL
      )
      return {
        "id" => results.first["id"].to_i,
        "title" => results.first["title"],
        "location" => results.first["location"],
        "air_temperature" => results.first["air_temperature"].to_f,
        "meters_downstream" => results.first["meters_downstream"].to_i,
        "stream_width" => results.first["stream_width"].to_i,
        "stream_depth" => results.first["stream_depth"].to_i,
        "water_temperature" => results.first["water_temperature"].to_f,
        "water_turbidity" => results.first["water_turbidity"].to_i,
        "water_suspended_solids" => results.first["water_suspended_solids"].to_i,
        "water_ph" => results.first["water_ph"].to_f,
        "sediment_size" => results.first["sediment_size"].to_i,
        "sediment_composition" => results.first["sediment_composition"],
        "foliage_cover" => results.first["foliage_cover"].to_i,
        "invertebrates" => results.first["invertebrates"],
        "vertebrates" => results.first["vertebrates"],
        "additional_observations" => results.first["additional_observations"]
      }
    end

    def self.update(id, opts)
      results = DB.exec(
        <<-SQL
          UPDATE entries
          SET title='#{opts["title"]}',
                  location='#{opts["location"]}',
                  air_temperature=#{opts["air_temperature"]},
                  meters_downstream=#{opts["meters_downstream"]},
                  stream_width=#{opts["stream_width"]},
                  stream_depth=#{opts["stream_depth"]},
                  water_temperature=#{opts["water_temperature"]},
                  water_turbidity=#{opts["water_turbidity"]},
                  water_suspended_solids=#{opts["water_suspended_solids"]},
                  water_ph=#{opts["water_ph"]},
                  sediment_size=#{opts["sediment_size"]},
                  sediment_composition='#{opts["sediment_composition"]}',
                  foliage_cover=#{opts["foliage_cover"]},
                  flora='#{opts["flora"]}',
                  invertebrates='#{opts["invertebrates"]}',
                  vertebrates='#{opts["vertebrates"]}',
                  additional_observations='#{opts["additional_observations"]}'
          WHERE id=#{id}
          RETURNING title,
            location,
            air_temperature,
            meters_downstream,
            stream_width,
            stream_depth,
            water_temperature,
            water_turbidity,
            water_suspended_solids,
            water_ph,
            sediment_size,
            sediment_composition,
            foliage_cover,
            flora,
            invertebrates,
            vertebrates,
            additional_observations;
        SQL
      )
      return {
        "id" => results.first["id"].to_i,
        "title" => results.first["title"],
        "location" => results.first["location"],
        "air_temperature" => results.first["air_temperature"].to_f,
        "meters_downstream" => results.first["meters_downstream"].to_i,
        "stream_width" => results.first["stream_width"].to_i,
        "stream_depth" => results.first["stream_depth"].to_i,
        "water_temperature" => results.first["water_temperature"].to_f,
        "water_turbidity" => results.first["water_turbidity"].to_i,
        "water_suspended_solids" => results.first["water_suspended_solids"].to_i,
        "water_ph" => results.first["water_ph"].to_f,
        "sediment_size" => results.first["sediment_size"].to_i,
        "sediment_composition" => results.first["sediment_composition"],
        "foliage_cover" => results.first["foliage_cover"].to_i,
        "invertebrates" => results.first["invertebrates"],
        "vertebrates" => results.first["vertebrates"],
        "additional_observations" => results.first["additional_observations"]
      }
    end

end

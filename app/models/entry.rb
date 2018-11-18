class Entry
    # ==================================================
    #                      SET UP
    # ==================================================

    # add attribute readers for instance access
    attr_reader :id, :meters_downstream, :stream_width, :stream_depth, :sediment_size, :foliage_cover, :invertebrates, :vertebrates, :sediment_composition, :dissolved_oxygen, :turbidity, :suspended_solids

    #connect to postgres
    DB = PG.connect({
      :host => "localhost",
      :port => 5432,
      :dbname => 'scinotes_development'
    })

    # initialize options hash
    def initialize(opts = {}, id=nil)
      @id = id_to_i
      @meters_downstream = opts["meters_downstream"].to_i
      @stream_width = opts["stream_width"].to_i
      @stream_depth = opts["stream_depth"].to_i
      @sediment_size = opts["sediment_size"].to_i
      @foliage_cover = opts["foliage_cover"].to_i
      @invertebrates = opts["invertebrates"]
      @vertebrates = opts["vertebrates"]
      @sediment_composition = opts["sediment_composition"]
      @dissolved_oxygen = opts["dissolved_oxygen"].to_i
      @turbidity = opts["turbidity"].to_i
      @suspended_solids = opts["suspended_solids"].to_i
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
          "meters_downstream" => result["meters_downstream"].to_i,
          "stream_width" => result["stream_width"].to_i,
          "stream_depth" => result["stream_depth"].to_i,
          "sediment_size" => result["sediment_size"].to_i,
          "foliage_cover" => result["foliage_cover"].to_i,
          "invertebrates" => result["invertebrates"],
          "vertebrates" => result["vertebrates"],
          "sediment_composition" => result["sediment_composition"],
          "dissolved_oxygen" => result["dissolved_oxygen"].to_i,
          "turbidity" => result["turbidity"].to_i,
          "suspended_solids" => result["suspended_solids"].to_i
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
        "meters_downstream" => results.first["meters_downstream"].to_i,
        "stream_width" => results.first["stream_width"].to_i,
        "stream_depth" => results.first["stream_depth"].to_i,
        "sediment_size" => results.first["sediment_size"].to_i,
        "foliage_cover" => results.first["foliage_cover"].to_i,
        "invertebrates" => results.first["invertebrates"],
        "vertebrates" => results.first["vertebrates"],
        "sediment_composition" => results.first["sediment_composition"],
        "dissolved_oxygen" => results.first["dissolved_oxygen"].to_i,
        "turbidity" => results.first["turbidity"].to_i,
        "suspended_solids" => results.first["suspended_solids"].to_i
      }
    end

    # create one
    def self.create
      result = DB.exec()
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
          INSERT INTO entries(meters_downstream, stream_width, stream_depth, sediment_size, foliage_cover, invertebrates, vertebrates, sediment_composition, dissolved_oxygen, turbidity, suspended_solids)
          VALUES (#{opts["meters_downstream"]}, #{opts["stream_width"]}, #{opts["stream_depth"]}, #{opts["sediment_size"]}, #{opts["foliage_cover"]}, '#{opts["invertebrates"]}', '#{opts["vertebrates"]}', '#{opts["sediment_composition"]}', #{opts["dissolved_oxygen"]}, #{opts["turbidity"]}, #{opts["suspended_solids"]})
          RETURNING id, meters_downstream, stream_width, stream_depth, sediment_size, foliage_cover, invertebrates, vertebrates, sediment_composition, dissolved_oxygen, turbidity, suspended_solids;
        SQL
      )
      return {
        "id" => results.first["id"].to_i,
        "meters_downstream" => results.first["meters_downstream"].to_i,
        "stream_width" => results.first["stream_width"].to_i,
        "stream_depth" => results.first["stream_depth"].to_i,
        "sediment_size" => results.first["sediment_size"].to_i,
        "foliage_cover" => results.first["foliage_cover"].to_i,
        "invertebrates" => results.first["invertebrates"],
        "vertebrates" => results.first["vertebrates"],
        "sediment_composition" => results.first["sediment_composition"],
        "dissolved_oxygen" => results.first["dissolved_oxygen"].to_i,
        "turbidity" => results.first["turbidity"].to_i,
        "suspended_solids" => results.first["suspended_solids"].to_i
      }
    end

    def self.update(id, opts)
      results = DB.exec(
        <<-SQL
          UPDATE entries
          SET meters_downstream=#{opts["meters_downstream"]}, stream_width=#{opts["stream_width"]}, stream_depth=#{opts["stream_depth"]}, sediment_size=#{opts["sediment_size"]}, foliage_cover=#{opts["foliage_cover"]}, invertebrates='#{opts["invertebrates"]}', vertebrates='#{opts["vertebrates"]}', sediment_composition='#{opts["sediment_composition"]}', dissolved_oxygen=#{opts["dissolved_oxygen"]}, turbidity=#{opts["turbidity"]}, suspended_solids=#{opts["suspended_solids"]}
          WHERE id=#{id}
          RETURNING id, meters_downstream, stream_width, stream_depth, sediment_size, foliage_cover, invertebrates, vertebrates, sediment_composition, dissolved_oxygen, turbidity, suspended_solids;
        SQL
      )
      return {
        "id" => results.first["id"].to_i,
        "meters_downstream" => results.first["meters_downstream"].to_i,
        "stream_width" => results.first["stream_width"].to_i,
        "stream_depth" => results.first["stream_depth"].to_i,
        "sediment_size" => results.first["sediment_size"].to_i,
        "foliage_cover" => results.first["foliage_cover"].to_i,
        "invertebrates" => results.first["invertebrates"],
        "vertebrates" => results.first["vertebrates"],
        "sediment_composition" => results.first["sediment_composition"],
        "dissolved_oxygen" => results.first["dissolved_oxygen"].to_i,
        "turbidity" => results.first["turbidity"].to_i,
        "suspended_solids" => results.first["suspended_solids"].to_i
      }
    end

    # update one (by id)
    def self.put(id)

    end
end

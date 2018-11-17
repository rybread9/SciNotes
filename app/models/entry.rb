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

    # get on by idea
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

    # delete one (by id)
    def self.delete(id)

    end

end

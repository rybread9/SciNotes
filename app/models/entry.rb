class Entry
    # ==================================================
    #                      SET UP
    # ==================================================

    # add attribute readers for instance access
    attr_reader :id, :meters_downstream, :stream_width, :stream_depth, :sediment_size, :foliage_cover, :invertebrates, :vertebrates, :sediment_composition, :dissolved_oxygen, :turbidity, :suspended_solids

    #connect to postgres
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'scinotes')

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
      results = DB.exec()
    end

    # get on by idea
    def self.find(id)
      result = DB.exec()
    end

    # delete one (by id)
    def self.delete(id)

    end

end

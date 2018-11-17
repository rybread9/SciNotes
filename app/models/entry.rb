class Entry
    # ==================================================
    #                      SET UP
    # ==================================================


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

    # get one (by id)
    def self.find(id)
      result = DB.exec()
    end

    # create one
    def self.create
      result = DB.exec()
    end

    # delete one (by id)
    def self.delete(id)

    end

    # update one (by id)
    def self.put(id)

    end  
end

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

    # get on by idea
    def self.find(id)
      result = DB.exec()
    end

    # delete one (by id)
    def self.delete(id)

    end

end

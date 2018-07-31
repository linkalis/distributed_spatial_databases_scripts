rs.initiate(
   {
      _id: "configserver",
      members: [
         { _id: 0, host : "mongo_configsvr_a:27019" },
         { _id: 1, host : "mongo_configsvr_b:27019" },
         { _id: 2, host : "mongo_configsvr_c:27019" },
      ]
   }
)

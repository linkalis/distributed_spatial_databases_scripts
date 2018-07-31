rs.initiate(
   {
      _id: "shard02",
      members: [
         { _id: 0, host : "mongo_shard02_a:27018" },
         { _id: 1, host : "mongo_shard02_b:27018" },
         { _id: 2, host : "mongo_shard02_c:27018" },
      ]
   }
)

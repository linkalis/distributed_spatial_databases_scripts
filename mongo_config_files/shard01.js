rs.initiate(
   {
      _id: "shard01",
      members: [
         { _id: 0, host : "mongo_shard01_a:27018" },
         { _id: 1, host : "mongo_shard01_b:27018" },
         { _id: 2, host : "mongo_shard01_c:27018" },
      ]
   }
)

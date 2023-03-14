import avro from "avsc";

export default avro.Type.forSchema({
  type: "record",
  name: "Pet",
  fields: [
    {
      name: "category",
      type: { type: "enum", symbols: ["CAT", "DOG"] },
    },
    { name: "noise", type: "string" },
  ],
});

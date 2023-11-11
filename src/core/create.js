
const setType = (value) => {
  if (typeof value === "string") {
    return { S: value };
  } else if (typeof value === "number") {
    return { N: value.toString() };
  } else if (typeof value === "boolean") {
    return { BOOL: value };
  } else if (Buffer.isBuffer(value)) {
    return { B: value.toString("base64") };
  } else if (value === null || value === undefined) {
    return { NULL: true };
  } else if (Array.isArray(value)) {
    return { L: value.map((item) => getDynamoDBType(item)) };
  } else if (typeof value === "object") {
    return { M: Object.entries(value).reduce((acc, [key, value]) => ({ ...acc, [key]: setType(value) }), {}) }
  }
  // Handle other types as needed
  return { NULL: true }
}

const create = params => {
  if (typeof params !== 'object') {
    throw new TypeError('create: argument must be of type object.')
  }
  try {
    const items = Object.entries(params).reduce((acc, [key, value]) => ({ ...acc, [key]: setType(value) }), {})
    const values = {
      TableName: process.env.DATABASE,
      Item: items,
      ReturnValues: "ALL_OLD",
    }
    const client = new DynamoDBClient()
    const command = new PutItemCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(error)
  }
}


const setType = value => {
  if (typeof value === "string") {
    return { S: value }
  }
  if (typeof value === "number") {
    return { N: value.toString() }
  }
  if (typeof value === "boolean") {
    return { BOOL: value }
  } 
  if (Buffer.isBuffer(value)) {
    return { B: value.toString("base64") }
  } 
  if (value === null || value === undefined) {
    return { NULL: true }
  }
  if (Array.isArray(value)) {
    return { L: value.map((item) => getDynamoDBType(item)) }
  }
  if (typeof value === "object") {
    return { M: Object.entries(value).reduce((acc, [key, value]) => ({ ...acc, [key]: setType(value) }), {}) }
  }
}

const create = params => {
  if (!process.env.TABLE_NAME) {
    throw new ReferenceError('TABLE_NAME environmental variable is required.')
  }
  if (typeof process.env.TABLE_NAME !== 'string') {
    throw new TypeError('TABLE_NAME must be of type string.')
  }
  if (typeof params !== 'object') {
    throw new TypeError('Argument must be of type object.')
  }
  try {
    const items = Object.entries(params).reduce((acc, [key, value]) => ({ ...acc, [key]: setType(value) }), {})
    const values = {
      TableName: process.env.TABLE_NAME,
      Item: items,
      ReturnValues: "ALL_OLD",
    }
    const client = new DynamoDBClient()
    const command = new PutItemCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(`create: ${error}`)
  }
}

export default create

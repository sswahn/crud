import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'

const read = async (limit = undefined) => {
  if (!process.env.TABLE_NAME) {
    throw new ReferenceError('TABLE_NAME environmental variable is required.')
  }
  if (typeof process.env.TABLE_NAME !== 'string') {
    throw new TypeError('TABLE_NAME must be of type string.')
  }
  if (typeof limit !== 'number') {
    throw new TypeError('Argument must be of type number.')
  }
  try {
    const limitation = limit ? { Limit: limit } : {}
    const values = {
      TableName: process.env.TABLE_NAME,
      ...limitation
    }
    const client = new DynamoDBClient()
    const command = new ScanCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(`read: ${error}`)
  }
}

export default read

import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb'

const read = async (limit = 10) => {
  if (typeof limit !== 'number') {
    throw new TypeError('read: argument must be of type number.')
  }
  try {
    const values = {
      TableName: process.env.DATABASE,
      Limit: limit 
    }
    const client = new DynamoDBClient()
    const command = new ScanCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(error)
  }
}

export default read

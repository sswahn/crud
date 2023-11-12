import { DynamoDBClient, DeleteItemCommand } from '@aws-sdk/client-dynamodb'

const remove = async key => {
  if (!process.env.TABLE_NAME) {
    throw new ReferenceError('TABLE_NAME environmental variable is required.')
  }
  if (typeof process.env.TABLE_NAME !== 'string') {
    throw new TypeError('TABLE_NAME must be of type string.')
  }
  if (typeof key !== 'object') {
    throw new TypeError('Argument must be of type object.')
  }
  try {
    const values = {
      TableName: process.env.TABLE_NAME,
      Key: key,
      ReturnValues: 'ALL_OLD'
    }
    const client = new DynamoDBClient()
    const command = new DeleteItemCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(`remove: ${error}`)
  }
}

export default remove

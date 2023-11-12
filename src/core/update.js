import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb'

const update = (params, key) => {
  if (!process.env.TABLE_NAME) {
    throw new ReferenceError('TABLE_NAME environmental variable is required.')
  }
  if (typeof process.env.TABLE_NAME !== 'string') {
    throw new TypeError('TABLE_NAME must be of type string.')
  }
  if (typeof params !== 'object') {
    throw new TypeError('First argument must be of type object.')
  }
  if (typeof key !== 'object') {
    throw new TypeError('Second argument must be of type object.')
  }
  try {
    const updateExpression = 'SET ' + Object.keys(params).map(attribute => `${attribute} = :${attribute}`).join(', ')
    const expressionAttributeValues = Object.entries(params).reduce((acc, [attribute, value]) => ({ ...acc, [`:${attribute}`]: value }), {})
    const values = {
      TableName: process.env.TABLE_NAME,
      Key: key,
      UpdateExpression: updateExpression,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW"
    }
    const client = new DynamoDBClient()
    const command = new UpdateItemCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(`update: ${error}`)
  }
}

export default update

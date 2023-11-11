import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb'

const update = (params, key) => {
  try {
    const updateExpression = "SET " + Object.keys(params).map(attribute => `${attribute} = :${attribute}`).join(", ")
    const expressionAttributeValues = Object.fromEntries(Object.entries(params).map(([attribute, value]) => [`:${attribute}`, value]))
    const values = {
      TableName: process.env.TABLE_NAME,
      Key: key, // Key is an object representing the primary key of the item to be updated
      UpdateExpression: updateExpression, // Update expression to modify attributes
      ExpressionAttributeValues: expressionAttributeValues, // Values to be substituted in the update expression
      ReturnValues: "ALL_NEW", // Adjust as needed based on your requirements
    }
    const client = new DynamoDBClient()
    const command = new UpdateItemCommand(values)
    return client.send(command)
  } catch (error) {
    throw new Error(error)
  }
}

export default update

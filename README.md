# Dynamo · [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sswahn/dynamo/blob/main/LICENSE) ![npm version](https://img.shields.io/npm/v/@sswahn/dynamo)

This library simplifies common DynamoDB CRUD operations, providing a seamless and intuitive experience.  

## Features

- **Seamless CRUD Operations**: Perform Create, Read, Update, and Delete operations with minimal effort. The library streamlines DynamoDB interactions.
- **Automatic Type Handling**: The library intelligently interprets JavaScript types and seamlessly translates them to DynamoDB-compatible formats.
- **Robust Error Handling**: The library incorporates robust error handling. Receive clear and actionable error messages for quick troubleshooting.

## Installation
Using npm.
```bash
npm install @sswahn/dynamo
```

## Usage  

### Import
```javascript
import dynamo from '@sswahn/dynamo'
```

### Create
Add items to your DynamoDB table. DynamoDB data types are automatically handled so no need to use properties such as S, or N, etc.
```javascript
const response = await dynamo.create(data)
```  

### Read
Retrieve items from your DynamoDB table. Optionally, set a limit for the scan to control the number of returned items.
```javascript
const response = await dynamo.read(limit)
```

### Read One
Retrieve an individual item from your DynamoDB table using its key.
```javascript
const response = await dynamo.readOne(key)
```  

### Update
Update attributes of existing items in your DynamoDB table. Specify the attributes to update and the key of the item to modify. 
```javascript
const response = await dynamo.update(data, key)
```

### Remove
Delete an item from your DynamoDB table. Provide the key of the item to remove.
```javascript
const response = await dynamo.remove(key)
```  

## License
Dynamo is [MIT Licensed](https://github.com/sswahn/dynamo/blob/main/LICENSE)

# Dynamo

This library simplifies common DynamoDB CRUD operations, providing a seamless and intuitive experience.  

## Installation  
Install using npm.  
```bash
npm install @sswahn/dynamo
```

## Features

### 🚀 Seamless CRUD Operations
Perform Create, Read, Update, and Delete operations with minimal effort. The library streamlines DynamoDB interactions, allowing you to focus on building, not managing data.

### 🌐 DynamoDB Type Conversion
Effortlessly convert JavaScript types to DynamoDB types using the `setType` function. Ensure consistent and accurate data storage with automatic type handling.

### ⚙️ Automatic Type Handling
Forget about data type headaches. The library intelligently interprets JavaScript types and seamlessly translates them to DynamoDB-compatible formats, eliminating the need for manual conversions.

### 📚 Intuitive API
The library provides an intuitive and easy-to-use API for DynamoDB interactions. Simple function calls abstract the complexities, making it accessible for both beginners and experienced developers.

### 🧪 Robust Error Handling
Rest easy knowing that the library incorporates robust error handling. Receive clear and actionable error messages for quick troubleshooting during development.

### 🌐 Serverless Ready
Tailored for serverless environments, the DynamoDB Utility Library maximizes efficiency and resource utilization, ensuring optimal performance in your serverless applications.

### 📦 Lightweight and Modular
Designed with simplicity in mind, the library is lightweight and modular. Use only the functions you need, keeping your project clean and avoiding unnecessary bloat.

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
Add items to your DynamoDB table with ease. The library automatically handles data types, making it simple to persist JavaScript objects in DynamoDB.
```javascript
const response = await dynamo.create(data)
```  

### Read
Retrieve items from your DynamoDB table effortlessly. Optionally, set a limit for the scan to control the number of returned items.
```javascript
const response = await dynamo.read(limit)
```  

### Update
Seamlessly update attributes of existing items in your DynamoDB table. Specify the attributes to update and the key of the item to modify. 
```javascript
const response = await dynamo.update(data, key)
```

### Remove
Effortlessly delete items from your DynamoDB table. Provide the key of the item to remove.
```javascript
const response = await dynamo.remove(key)
```  

## License
Dynamo is [MIT Licensed](https://github.com/sswahn/dynamo/blob/main/LICENSE)

class ApiResponse{
    constructor(statusCode,data,message="success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode<400 // (claude explain this line like what is success here and etc in detail)
    }
}

// important for status code 
// 1. Informational responses (100-199) 
// 2. Successful responses (200-299) 
// 1. Redirection responses (300-399) 
// 1. Client error responses (400-499) 
// 1. Server error responses (500-599) 
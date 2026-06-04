export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong",
    NO_data_FOUND = "No data found",
    CREATE_FAILED = "Create failed",
    update_FAILED = "Update failed",
    delete_FAILED = "Delete failed",
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "Forbidden",
    NOT_FOUND = "Not found",
}

class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor (statusCode: HttpCode, StatusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = StatusMessage;
    }
}

export default Errors;
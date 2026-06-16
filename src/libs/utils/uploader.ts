import path from "path";
import multer from "multer"; // bu bizga browser yoki Postman dan user tomondan kelgan File yoki rasm ni qabul qilib ochib beradi.
import { v4 } from "uuid";

function getTargetImageStorage(address: any) {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./uploads/${address}`);
        },
        filename: function (req, file, cb) {
            const extension = path.parse(file.originalname).ext;
            const random_name = v4() + extension; // agar bu yerda extension bo'lmasa
            cb(null, random_name);
        },
    });
}

const makeUploader = (address: string) => {
    const storage = getTargetImageStorage(address);
    return multer({ storage: storage });
};

export default makeUploader;

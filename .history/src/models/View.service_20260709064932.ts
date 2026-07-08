import ViewModel from "../schema/View.model";
import Errors from "../libs/Errors";
import { View, ViewInput } from "../libs/types/view"; 

class ViewService {
    checkViewExistence(input: ViewInput) {
        throw new Error("Method not implemented.");
    }
    private readonly viewModel;

    constructor() {
        this.viewModel = ViewModel;
    }
}

export default ViewService;
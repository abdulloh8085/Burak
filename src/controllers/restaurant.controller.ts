import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
 restaurantController.getSignup = (req: Request, res: Response) => {
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup page")

        const newMember: MemberInput = req.body
        newMember.memberType = MemberType.RESTAURANT
        const result = await memberService.processSignup(newMember)

        // TODO: SESSIONS AUTHENTICATION 

        res.send(result);
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err)
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin page")
        console.log(req.body)
        const input: LoginInput = req.body,
            result = await memberService.processLogin(input)

        // TODO: SESSIONS AUTHENTICATION 


        res.send(result);
    } catch (err) {
        console.log("Error, processLogin:", err);
        res.send(err)
    }
};


export default restaurantController;

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin page")
        res.render("login");
    } catch (err) {
        console.log("Error, getLogin:", err);
    }
};



restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup page")

        const newMember: MemberInput = req.body
        newMember.memberType = MemberType.RESTAURANT
        const result = await memberService.processSignup(newMember)

        // TODO: SESSIONS AUTHENTICATION 

        res.send(result);
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err)
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.processLogin(input);
    //TODO SESSIONS AUTHENTICATION

    res.send(result);
  } catch (err) {
    console.log("Error, processLogin:", err);
    res.send(err);
  }
};

export default restaurantController;
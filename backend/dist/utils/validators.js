import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
// Login Validator
export const loginValidator = [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long")
];
// Signup Validator
export const signUpValidator = [
    body("name")
        .notEmpty()
        .withMessage("Name is Required!!"),
    // body('email').isEmail().withMessage('Email is not valid'),
    // body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ...loginValidator
];
export const chatCompletionValidator = [
    body("message")
        .notEmpty()
        .withMessage("Message is Required!!")
];
//# sourceMappingURL=validators.js.map
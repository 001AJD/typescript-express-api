import { NextFunction, Response, Request } from "express";
import { query, validationResult } from "express-validator";

const validateBlogIByPayload = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		next();
	} else {
		res.status(400).json({ errors: errors.array() }).end();
	}
};

const createBlogByIdValidationRules = () => {
	const rules = [query("id").escape(), query("id").isString()];
	return rules;
};

export { createBlogByIdValidationRules, validateBlogIByPayload };

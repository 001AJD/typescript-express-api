import { Request, Response, NextFunction } from "express";
import { query, validationResult } from "express-validator";

const validateCommentsByBlogIdParams = (
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

const createCommentsByIdValidationRules = () => {
	const rules = [query("blogid").escape()];
	return rules;
};

export { createCommentsByIdValidationRules, validateCommentsByBlogIdParams };

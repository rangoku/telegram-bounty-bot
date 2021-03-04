import { evaluate } from 'mathjs'
import { Expression } from "./types";

export function try_eval_math_expr(expr: Expression): string | null {
    try {
        return evaluate(expr)
    }
    catch (e) {
        return null
    }
}
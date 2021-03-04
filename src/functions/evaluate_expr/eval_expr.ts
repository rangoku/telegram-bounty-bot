import { evaluate } from 'mathjs'
import { Expression } from "./types"

export function try_eval_math_expr(expr: Expression): string | null {
    try {
        const result = evaluate(expr.toLowerCase())
        return typeof result === 'object' ? null : result
    }
    catch (e) {
        return null
    }
}
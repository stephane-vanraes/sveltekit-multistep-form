import { redirect } from "@sveltejs/kit";
import { parseFormData } from "./helpers";

function createStep(target) {
    return async ({ request }) => {
        const formData = await request.formData();
        const data = parseFormData(formData);
        return {
            step: target,
            data
        }
    }
}

export const actions = {
    step_1: createStep(2),
    step_2: createStep(3),
    step_2_back: createStep(1),
    step_3_back: createStep(2),
    final: async({ request }) => {
        const formData = await request.formData();
        const data = parseFormData(formData);
        if (!data.accept) {
            return {
                step: 3,
                data,
                error: true
            }
        } else {
            throw redirect(303, '/final');
        }
    },
    add_item: async({ request }) => {
        const formData = await request.formData();
        const data = parseFormData(formData);
        const id = crypto.randomUUID();
        data.items[id] = ""
        return {
            step: 2,
            data
        }
    }
}
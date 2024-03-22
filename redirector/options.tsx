import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'

// https://zenn.dev/x_point_1/articles/26959496a4c237
// https://www.memory-lovers.blog/entry/2022/12/03/211848

export default function Options() {
    const schema = z.object({
        items: z.array(
            z.object({
                from: z.string(),
                to: z.string()
            })
        )
    })

    type FormData = z.infer<typeof schema>
    const initialData: FormData = {
        items: [
            {from: 'https://www.sp.netkeiba.com/', to: 'https://www.netkeiba.com/'}
        ]
    }
    const {register, handleSubmit,control} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: initialData
    })

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'items'
    })
    return (
        <h1>Options</h1>

    )
}
'use server'

import { api } from '@/services/api'
import { revalidatePath } from 'next/cache'

export async function createSportsItem(form: FormData) {
    const res = await api('POST', '/products', { data: form })

    if (!res.error) {
        revalidatePath('/admin/artigos-esportivos')
    }

    return JSON.stringify(res)
}

export async function updateSportsItem(form: FormData) {
    const res = await api('PUT', `/products/${form.get('id')}`, { data: form })

    if (!res.error) {
        revalidatePath('/admin/products')
    }

    return JSON.stringify(res)
}

export async function destroySportsItem(id: string) {
    const res = await api('DELETE', `/products/${(id)}`,)

    if (!res.error) {
        revalidatePath('/admin/artigos-esportivos')
    }

    return JSON.stringify(res)
}
